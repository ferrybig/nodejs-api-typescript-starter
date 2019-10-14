import BaseConfiguration from "common/BaseConfiguration";

export default {
  PORT: 3000 || process.env.PORT,
  DATABASE_HOST: "",
  DATABASE_PASSWORD: "",
  DATABASE_USER: ""
} as BaseConfiguration;
