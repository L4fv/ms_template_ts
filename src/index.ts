import { Application, urlencoded, json } from "express";
import * as morgan from "morgan";

import * as helmet from "helmet";
import * as winston from "winston";

import { unCoughtErrorHandler } from "./handlers/responseHandler";
import Routes from "./routes";

// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(morgan("combined"));
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(helmet());

    app.use(unCoughtErrorHandler);
  }
}

process.on("beforeExit", function (err) {
  winston.error(JSON.stringify(err));
  console.error(err);
});
