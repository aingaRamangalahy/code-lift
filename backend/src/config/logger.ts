import { transports, format, createLogger } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, colorize, align, printf } = format

const logger = createLogger({
    level: 'http',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info) => `[${info.level}] [${info.timestamp}]: ${info.message}`)
    ),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: 'backend_logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }), // DailyRotateFile transport for logging to a file with daily rotation
    ],
})

export { logger }
