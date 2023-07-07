import {transports, format, createLogger} from "winston";
import("winston-daily-rotate-file");
const { combine, timestamp, colorize, align, printf } = format;

const logger = createLogger({
  level: "http",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf((info) => `[${info.level}] [${info.timestamp}]: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: "backend_logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }), // DailyRotateFile transport for logging to a file with daily rotation
  ],
});

export { logger };
