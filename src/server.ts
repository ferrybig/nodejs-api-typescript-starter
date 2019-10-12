import "reflect-metadata";
import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { useExpressServer } from "routing-controllers";

dotenv.config();

interface ApplicationServer {
  configureRoutes(): void;
  configureMiddleware(): void;
  bootstrap(): void;
}

class Server implements ApplicationServer {
  private app: Application;

  /**
   *
   */
  constructor() {
    this.app = express();
  }

  configureRoutes(): void {
    useExpressServer(this.app, {
      cors: true,
      controllers: [`${__dirname}/**/*Controller.js`]
    });
  }

  configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(bodyParser({ extended: true }));
  }

  bootstrap(): void {
    throw new Error("Method not implemented.");
  }
}

export default Server;
