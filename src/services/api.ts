export interface Field {
  name: string;
  title: string;
  hidden?: boolean;
  primary?: boolean;
}

export interface RestAPI {
  fields: Field[];
  get primaryKey(): Field;
  endpoint: string;
}

export interface Row {
  [x: string]: any;
}

export function MakeRestAPI(endpoint: string, fields: Field[]): RestAPI {
  return {
    fields,
    endpoint,
    get primaryKey() {
      const primaryKey = fields.find((field) => field.primary);
      if (!primaryKey) {
        throw new Error("Primary key does not exists");
      }
      return primaryKey;
    },
  };
}

export interface FindOptions {
  page: number;
}

export interface RestAPIClientArgs {
  apiUrl: string;
  restApi: RestAPI;
}

export class RestAPIClient {
  constructor(private token: string, private restApi: RestAPI) {}

  async find({ page }: FindOptions): Promise<{ data: Row[]; total: number }> {
    const url = `${this.restApi.endpoint}?page=${page}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        autorization: `Bearer ${this.token}`,
      },
      credentials: "include",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error("Server exception");
    }
    return response.json();
  }
}
