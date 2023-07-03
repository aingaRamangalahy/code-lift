import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { DB_URI, BODY_PARSER_LIMIT, config } from "@config/index";
import { logger } from "./utils/logger";

import Route from "./router";
// import { errorHandler } from "./middlewares";

class Server {
  private app: express.Application;

  constructor(private port) {
    this.app = express();
    this.config();
  }

  // connect database
  private connectDatabase() {
    logger.info("connecting to database...");
    mongoose
      .connect(DB_URI)
      .then(() => logger.info("Database connected..."))
      .catch((e) => {
        logger.error(new Error("Database connection error"));
        process.exit(1)
      }
      );
  }

  private config() {
    if (config.isDev) {
      this.app.use(
        morgan("[:date[iso]] :method :url :status :response-time ms")
      );
    }
    if (config.isProd) {
      this.app.use(morgan("combined"));
    }
    this.app.use(helmet());

    this.connectDatabase();

    this.app.use(cors());

    // use body parser
    this.app.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.app.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );

    // Set static folder
    this.app.use(express.static(path.join(__dirname, "public")));

    // mount routes
    const appRoutes = new Route().router;
    this.app.use(appRoutes);

    // error handler
    // this.app.use(errorHandler);
  }

  public bootstrap() {
    return this.app.listen(this.port, () => {
        logger.info("Server started on port: ", this.port);
    });
  }
}

export default Server;
