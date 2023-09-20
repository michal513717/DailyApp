import type { Application } from "express";


export abstract class CommonRoutesConfig {

  protected routeName: string;
  protected version: string;
  protected app: Application;

  public static RESPONSE_STATUS = {
    FAILED: "Failed",
    SUCCESS: "Success",
  };

  protected static routeType = {
    PUT: "PutRoutes",
    GET: "GetRoutes",
    POST: "PostRoutes",
    PATCH: "PatchRoutes",
    DELETE: "DeleteRoutes",
    SOCKET: "SocketRoutes",
    NOT_VALID: "NotValidRoutes",
    NOTIFICATIONS: "NotificationsRoutes",
    ASSETS: "Assets control",
    AUTH: "Auth control",
    GAMES_OPTIONS: "Games options",
    QUIZZES: "Quizzes control",
    SURVEYS: "Surveys control",
    USERS: "Users control",
  };

  constructor(app: Application, routeName: string, version: string) {
    this.routeName = routeName;
    this.app = app;
    this.version = version;

    this.configureRoute();
  }

  public getName(): string {
    return this.routeName;
  }

  public getVersion(): string {
    return this.version;
  }

  public getApp(): Application {
    return this.app;
  }

  abstract configureRoute(): Application;
}