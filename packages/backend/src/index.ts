import DatabaseConnection from "./database/connection";
import { createHTTPServer } from "./server";


new DatabaseConnection()
const server = new createHTTPServer();
server.start();

