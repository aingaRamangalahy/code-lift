import express, { Express} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import * as path from "path";
import * as bodyParser from "body-parser";

import { BODY_PARSER_LIMIT, config } from "@config/index";
import { logger } from "@config/logger";

import Route from "./router";
import { errorHandler } from "@core/middlewares/errorHandler";

class Server {
    public static app: Express
    constructor() {}

    public static getServer(): Express {
        if (!Server.app) {
            const app = express()
            Server.app = app
        }
        try {
            if (config.isDev) {
                Server.app.use(
                    morgan(':method :url :status :response-time ms', {
                        stream: {
                            // Configure Morgan to use our custom logger with the http severity
                            write: (message) => logger.http(message.trim()),
                        },
                    })
                )
            }
            if (config.isProd) {
                Server.app.use(morgan('combined'))
            }
            Server.app.use(helmet())
            Server.app.use(cors())

            // use body parser
            Server.app.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }))
            Server.app.use(
                bodyParser.urlencoded({
                    limit: BODY_PARSER_LIMIT,
                    extended: true,
                })
            )

            // Set static folder
            Server.app.use(express.static(path.join(__dirname, 'public')))

            // mount routes
            const appRoutes = new Route().router
            Server.app.use(appRoutes)
            // error handler
            Server.app.use(errorHandler)
            return Server.app
        } catch (error) {
            logger.error(error)
            throw error
        }
    }
} 

export default Server;