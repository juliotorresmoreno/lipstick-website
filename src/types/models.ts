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
  baseUrl: string;
  apiUrl: string;
  mercadoPagoPublicKey: string;
  pricingTableId: string;
  publishableKey: string;
}
