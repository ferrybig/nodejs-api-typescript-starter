import "reflect-metadata";
import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

import { useExpressServer } from "routing-controllers";

dotenv.config();

class Server {
  private static app: Application = express();

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
  }

  static bootstrap(): Application {
    this.configureMiddleware();
    this.configureRoutes();

    return this.app;
  }
}

export default Server;
