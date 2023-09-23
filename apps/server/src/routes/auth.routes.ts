import type { Application } from "express";
import { Router } from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { loginHandler } from "../controllers/auth.controllers";

export class AuthRoutes extends CommonRoutesConfig {
  
  constructor(app: Application){
    super(app, "Auth Route", "0.0.1");
  }
  
  configureRoute(): Application {
    
    const authRouter = Router();

    authRouter.post('/login', loginHandler);

    this.app.use('/auth', authRouter);

    return this.getApp()
  }
}