import type { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import express, { Router } from "express";

export class InitRoutes extends CommonRoutesConfig {

  constructor(app: Application) {

    super(app, "Init Route", "0.0.1");
  }

  configureRoute(): Application {

    const initRouter = Router();


    var callback = (req: Request, res: Response) => {
      return res.status(200).json({
        status: CommonRoutesConfig.RESPONSE_STATUS.SUCCESS,
        message: "ok",
      });
    }

    initRouter.get('/', callback)


    this.app.use('/', initRouter);

    return this.getApp();
  }
}