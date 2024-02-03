export interface Field {
  name: string;
  title: string;
  hidden?: boolean;
  primary?: boolean;
}

export interface RestAPI {
  endpoint: string;
}

export interface Record {
  [x: string]: any;
  id: number;
}

export function MakeRestAPI(endpoint: string): RestAPI {
  return {
    endpoint,
  };
}

export interface FindOptions {
  page?: number;
}

export interface RestAPIClientArgs {
  apiUrl: string;
  restApi: RestAPI;
}

export class RestAPIClient {
  private token: string = "";
  public fields?: Field[];

  constructor(private restApi: RestAPI) {}

  configure(token: string) {
    this.token = token;
  }

  async find({ page }: FindOptions = {}): Promise<{
    data: Record[];
    total: number;
  }> {
    let url = `${this.restApi.endpoint}`;
    if (page) url += `?page=${page}`;

    if (!this.token) return { data: [], total: 0 };

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      credentials: "include",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Server exception");
    }
    return response.json();
  }

  async post(record: any): Promise<void> {
    const response = await fetch(this.restApi.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(record),
    });
    if (!response.ok) {
      const content = await response.json();
      throw new Error("Server exception", { cause: content });
    }
  }

  async patch({ id, ...record }: Record): Promise<void> {
    const response = await fetch(`${this.restApi.endpoint}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(record),
    });
    if (!response.ok) {
      throw new Error("Server exception");
    }
  }

  async delete(id: number): Promise<void> {
    const response = await fetch(`${this.restApi.endpoint}/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      credentials: "include",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error("Server exception");
    }
  }
}
