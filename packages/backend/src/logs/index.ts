import winston from "winston";

const { combine, timestamp, printf, label, colorize } = winston.format;

const colors = {
  timestamp: "\x1b[36m",
  level: "\x1b[33m",
  message: "\x1b[32m",
  label: "\x1b[35m",  
  reset: "\x1b[0m",
};

export const logger = winston.createLogger({
  level: "info",
  format: combine(
    label({ label: "wardrobe-backend" }),
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return (
        `${colors.timestamp}${timestamp}${colors.reset} ` +
        `${colors.level}[${level}]${colors.reset} ` +
        `${colors.message}${message}${colors.reset}`
      );
    })
  ),
  transports: [new winston.transports.Console()],
});
