import express, { Router } from "express";
import { commonRouteConfig } from "../core/BaseRoute";
import { AuthRoute } from "./authRoute";
import { logger } from "../logs";
export class RouteConfig {
  public routerArray: Array<commonRouteConfig> = [];
  public constructor(app: express.Application) {
    this.initializeRoutes(app);
  }
  private initializeRoutes(app: express.Application) {
    logger.info("Initializing AuthRoute");
    this.routerArray.push(new AuthRoute(app));
    this.routerArray.forEach((route: commonRouteConfig) => {
      logger.info(`Route configured: ${route.name}`);
    });
  }
}
