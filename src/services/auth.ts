import { Config, Session } from "@/types/models";

export interface RegisterPayload {
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export class AuthService {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async register(payload: RegisterPayload): Promise<Session> {
    const response = await fetch(this.config.apiUrl + "/auth/sign-up", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(response.statusText, { cause: err });
    }
    return response.json();
  }

  async login(payload: LoginPayload): Promise<Session> {
    const response = await fetch(this.config.apiUrl + "/auth/sign-in", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(response.statusText, { cause: err });
    }
    return response.json();
  }
}
