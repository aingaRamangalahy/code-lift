import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import bodyParser from 'body-parser';

import { BODY_PARSER_LIMIT, config } from '@config/index';
import { logger } from '@config/logger';

import baseRouter from './router';
import { errorHandler } from '@core/middlewares/errorHandler';

const app = express();

function setupServer() {
    try {
        if (config.isDev) {
            app.use(
                morgan(':method :url :status :response-time ms', {
                    stream: {
                        // Configure Morgan to use our custom logger with the http severity
                        write: (message) => logger.http(message.trim()),
                    },
                }),
            );
        }
        if (config.isProd) {
            app.use(morgan('combined'));
        }
        app.use(helmet());
        app.use(cors());

        // use body parser
        app.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
        app.use(
            bodyParser.urlencoded({
                limit: BODY_PARSER_LIMIT,
                extended: true,
            }),
        );

        // Set static folder
        app.use(express.static(path.join(__dirname, 'public')));

        // mount routes
        app.use('/', baseRouter);
        // error handler
        app.use(errorHandler);
        return app;
    } catch (error) {
        logger.error(error);
        throw error;
    }
}

export { setupServer };
