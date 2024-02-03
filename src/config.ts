import { Config } from "@/types/models";

if (process.env.LOADED !== "true") {
  require("dotenv").config();
}

process.env.LOADED = "true";

const config: Config = {
  baseUrl: process.env.BASE_URL as string,
  apiUrl: process.env.API_URL as string,
  mercadoPagoPublicKey: process.env.MERCADOPAGO_PUBLIC_KEY as string,
  pricingTableId: process.env.PRICING_TABLE_ID as string,
  publishableKey: process.env.PUBLISHABLE_KEY as string,
};

export default config;
