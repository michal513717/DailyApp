import type { Application } from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { Router } from "express";
import { addTasksHandler, getTasksHandler } from "../controllers/todo.controllers";


export class TodoListRoutes extends CommonRoutesConfig {

  constructor(app: Application) {

    super(app, "Todo List Routes", "0.0.1");
  }

  configureRoute(): Application {

    const todoListRouter = Router();

    todoListRouter.get('/getTasks', getTasksHandler);
    todoListRouter.post('/addTask', addTasksHandler);

    this.app.use('/todo/', todoListRouter)

    return this.getApp();
  }
}