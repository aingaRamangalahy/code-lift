import chalk from 'chalk';
import express from "express";
import cors from "cors";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { DB_URI, BODY_PARSER_LIMIT } from "@config/index";

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
        console.log(chalk.blue("connecting to database..."));
        mongoose
            .connect(DB_URI)
            .then(() => console.log(chalk.green("Database connected...")))
            .catch((e) => console.log(chalk.red("Database connection error", e.message)));
    }

    private config() {
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
            console.log(chalk.green("Server started on port: ", this.port));
        });
    }
}

export default Server;