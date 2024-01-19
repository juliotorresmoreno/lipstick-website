import { Config } from "@/types/models";

if (process.env.LOADED !== "true") {
  require("dotenv").config();
}

process.env.LOADED = "true";

const config: Config = {
  apiUrl: process.env.API_URL as string,
};

export default config;
