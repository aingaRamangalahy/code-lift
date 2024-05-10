// registering path
import 'module-alias/register';
import { setupServer } from './server';
import { PORT, API_URL } from './config';
import { connectDatabase } from '@core/database';
import { logger } from '@config/logger';

const appPort = PORT || 5000;

const start = async () => {
    try {
        await connectDatabase();
        const app = setupServer();

        app.listen(appPort, () => {
            logger.info(`Server started at ${API_URL}:${appPort}`);
        });
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};
start();
