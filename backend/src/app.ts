import 'reflect-metadata'; // required by typedi
import Server from "./core";
import { PORT } from "./config";

const appPort = PORT || 5000
const server = new Server(appPort)
server.bootstrap()