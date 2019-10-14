import "reflect-metadata";
import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import {
  useExpressServer,
  useContainer as routingUseContainer
} from "routing-controllers";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import { useContainer as ormUseContainer } from "typeorm";
import { Container } from "typedi";

dotenv.config();

export default class Server {
  private static app: Application = express();

  private static configureServices(): void {
    routingUseContainer(Container);
    ormUseContainer(Container);
  }

  private static configureRoutes(): void {
    useExpressServer(this.app, {
      cors: true,
      controllers: [`${__dirname}/**/*Controller.{ts,js}`]
    });
  }

  private static configureMiddleware(): void {
    this.app.use(cors());

    this.app.use(compression());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  static bootstrap(): Application {
    this.configureServices();
    this.configureMiddleware();
    this.configureRoutes();

    return this.app;
  }
}
