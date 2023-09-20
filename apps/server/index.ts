require("dotenv").config();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as http from "http";
// import { Server } from "socket.io";

// import initFireBaseApp from "./src/lib/firebase";
import { env } from "./src/utils/env";

// initFireBaseApp();

import { CommonRoutesConfig } from "./src/common/common.routes.config";
// import { AssetsRoutes } from "./src/routes/v1/assets.routes";
// import { AuthRoutes } from "./src/routes/v1/auth.routes";
// import { GamesRoutes } from "./src/routes/v1/games.routes";
import { NotValidRoutes } from "./src/routes/notValid.routes";
// import { NotificationsRoutes } from "./src/routes/v1/notifications.routes";
// import { QuizzesRoutes } from "./src/routes/v1/quizzes.routes";
// import { SurveysRoutes } from "./src/routes/v1/surveys.routes";
// import { UsersRoutes } from "./src/routes/v1/users.routes";
// import { SocketRoute } from "./src/routes/v3_old/socket.routes.config";

const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const routes = [] as Array<CommonRoutesConfig>;
// const serverIO = new Server(server);

app.use(bodyParser.urlencoded({ extended: true }));

// routes.push(new NotificationsRoutes(app));
// routes.push(new SocketRoute(app, serverIO));
// routes.push(new AssetsRoutes(app));
// routes.push(new AuthRoutes(app));
// routes.push(new GamesRoutes(app));
// routes.push(new QuizzesRoutes(app));
// routes.push(new SurveysRoutes(app));
// routes.push(new UsersRoutes(app));
routes.push(new NotValidRoutes(app));

const runningMessage = `Server running at http://10.0.2.2:${port}`;

server.listen(port, () => {
  routes.forEach((route) => {
    console.log(
      `Routes configured for ${route.getVersion()} - ${route.getName()}`
    );
  });

  console.log(runningMessage);
});