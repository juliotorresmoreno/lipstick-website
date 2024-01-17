if (process.env.LOADED !== "true") {
  require("dotenv").config();
}

process.env.LOADED = "true";

const config = {
  NAME: process.env.NAME ?? "",
  TITLE: process.env.TITLE ?? "",
  PHONE: process.env.PHONE ?? "",
  EMAIL: process.env.EMAIL ?? "",
  LINKEDIN: process.env.LINKEDIN ?? "",
  YOUTUBE: process.env.YOUTUBE ?? "",
  GITHUB: process.env.GITHUB ?? "",
  SITE_URL: process.env.SITE_URL ?? "",

  BOT_URL: process.env.SITE_URL,
  SHOW_BOT: process.env.SHOW_BOT,

  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID ?? "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
  NODE_ENV: process.env.NODE_ENV ?? "",

  LLM_TOP_P: Number(process.env.LLM_TOP_P ?? "3"),
  LLM_MAX_TOKENS: Number(process.env.LLM_MAX_TOKENS ?? "100"),
  LLM_TEMPERATURE: Number(process.env.LLM_TEMPERATURE ?? "0.5"),

  DATABASE_DRIVER: process.env.DATABASE_DRIVER ?? "",
  DATABASE_URL: process.env.DATABASE_URL ?? "",

  DEFAULT_TIMEZONE: process.env.DEFAULT_TIMEZONE ?? "UTC",

  BASE_URL: process.env.BASE_URL ?? "",

  RESEND_API_KEY: process.env.RESEND_API_KEY,
  SITE_EMAIL: process.env.SITE_EMAIL ?? "",

  ENABLE_CHAT: process.env.ENABLE_CHAT === "true",
};

export default config;
