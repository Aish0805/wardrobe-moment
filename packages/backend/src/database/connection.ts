import mongoose from "mongoose";
import { CustomEnv } from "../util/configENV";
import { DatabaseError } from "../error";
import { logger } from "../logs";

class DatabaseConnection {
  constructor() {
    mongoose
      .connect(CustomEnv.db_url)
      .then(() => {
        logger.info("Database connected successfully");
      })
      .catch((error) => {
        logger.error("Connection failed");
        throw new DatabaseError(`DB Connection failed -> ${error}`);
      });
  }
}

export default DatabaseConnection;
