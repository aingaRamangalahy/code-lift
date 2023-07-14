 // required by typedi for the usage of decorators or dependency injection
import 'reflect-metadata';


import { Express } from 'express'
import Server from "./server";
import { PORT, API_URL } from "./config";
import { connectDatabase } from "@core/database";
import { errorHandler } from '@core/middlewares/errorHandler';
import { logger } from '@config/logger';

const appPort = PORT || 5000

const bootstrapApplication = async (app: Express) => {
  try {
    await connectDatabase();
    app.listen(appPort, () => {
      logger.info(`Server started at ${API_URL}:${appPort}`);
    });
  } catch (error) {
    logger.error(error)
    throw error
  }

}
const app = Server.getServer();
bootstrapApplication(app);

// error handler
app.use(errorHandler)

