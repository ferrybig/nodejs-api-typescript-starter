import BaseConfiguration from "common/BaseConfiguration";

export default {
  PORT: process.env.PORT || 3000,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_USER: process.env.DATABASE_USER
} as BaseConfiguration;
