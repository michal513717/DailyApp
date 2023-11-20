import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";

const initFireBaseApp = () => {
  const serviceAccount = require("./daily-app-3950f-firebase-adminsdk-xrpjh-718d336ae5.json");

  initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

export default initFireBaseApp;