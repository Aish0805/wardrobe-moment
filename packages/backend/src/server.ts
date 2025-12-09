import express, { Request, Response, NextFunction } from "express";
import { AppError, ErrorHandler } from "./error";
import { logger } from "./logs";

export class createHTTPServer {
  app: express.Application;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupErrorHandlers();
    this.setupGlobalErrorHandlers();
  }

  private setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupErrorHandlers() {
    // this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.handle);
  }

  private setupGlobalErrorHandlers() {
    ErrorHandler.handleUnhandledRejection();
    ErrorHandler.handleUncaughtException();
  }

start() {
  this.app.listen(3000, () => {
    logger.info("Server is running on 🚀 http://localhost:3000");
  });
  this.app.use((req: Request, res: Response, next: NextFunction): void => {
    const start = process.hrtime();

    res.on("finish", () => {
      const [sec, nanosec] = process.hrtime(start);
      const ms = sec * 1e3 + nanosec / 1e6;
      logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${ms.toFixed(3)} ms`);
    });

    next();
  });
}

  static app() {
    if (!this.app) {
      throw new AppError("Express app not initialized", 500);
    }
    return this.app;
  }
}
