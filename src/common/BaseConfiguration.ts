import {} from "class-validator";

export default class BaseConfiguration {
  PORT: number;
  DATABASE_HOST: string;
  DATABASE_PASSWORD: string;
  DATABASE_USER: string;
}
