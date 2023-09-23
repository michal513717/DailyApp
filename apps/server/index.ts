require("dotenv").config();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as http from "http";

import { env } from "./src/utils/env";

import { DatabaseManager } from "./src/managers/databaseManager";

const a = new DatabaseManager();

import { CommonRoutesConfig } from "./src/common/common.routes.config";
import { InitRoutes } from "./src/routes/initRoutes.routes";
import { AuthRoutes } from "./src/routes/auth.routes";

//! MUST BE LAST
import { NotValidRoutes } from "./src/routes/notValid.routes";

const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const routes = [] as Array<CommonRoutesConfig>;

app.use(bodyParser.urlencoded({ extended: true }));

routes.push(new InitRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new NotValidRoutes(app));

const runningMessageMobile = `Mobile - Server running at http://10.0.2.2:${port}`;
const runningMessageDesktop = `Desktop - Server running at http://localhost:${port}`

server.listen(port, () => {
  routes.forEach((route) => {
    console.log(
      `Routes configured for ${route.getVersion()} - ${route.getName()}`
    );
  });

  console.log(runningMessageDesktop);
  console.log(runningMessageMobile);
});