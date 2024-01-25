export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface Session {
  token: string;
  user: User;
}

export interface Config {
  apiUrl: string;
}
