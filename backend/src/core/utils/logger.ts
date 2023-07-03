import winston from "winston";
const { combine, timestamp, colorize, align, printf } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf((info) => `[${info.level}] [${info.timestamp}]: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});

export { logger };
