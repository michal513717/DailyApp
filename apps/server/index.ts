require("dotenv").config();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as http from "http";
import initFireBaseApp from "./src/utils/firebase/index";
import { env } from "./src/utils/env";

// -------- Locators -------- //
import ManagerLocator from "./src/lib/locators/managerLocator";
import ServiceLocator from "./src/lib/locators/serviceLocator";

// -------- Routes -------- //
import { CommonRoutesConfig } from "./src/common/common.routes.config";
import { NotValidRoutes } from "./src/routes/notValid.routes";

// -------- Managers -------- //
import { DatabaseManager } from "./src/lib/managers/database.manager";

// -------- Services -------- //
import { AuthServices } from "./src/lib/services/auth.services";


const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const routes = [] as Array<CommonRoutesConfig>;

app.use(bodyParser.urlencoded({ extended: true }));

// routes.push(new AssetsRoutes(app));
routes.push(new NotValidRoutes(app));

initFireBaseApp();

ManagerLocator.registerManager("DATABASE_MANAGER", new DatabaseManager());

ServiceLocator.registerService("AUTH_SERVICES", new AuthServices());

const runningMessage = `Server running at http://10.0.2.2:${port}`;

server.listen(port, () => {
  routes.forEach((route) => {
    console.log(
      `Routes configured for ${route.getVersion()} - ${route.getName()}`
    );
  });

  console.log(runningMessage);
});