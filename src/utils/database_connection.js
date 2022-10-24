import mongoose, { connection } from "mongoose";
import config from "../configs";
import logger from "../utils/logger";

let database;

//normal function
//async function connect() {

//}

//arrow function
const connect = async () => {
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if (database) return; //check already have a database connection

    //create db connection
    mongoose.connect(MONGODB_URL)
        .then((connection) => {  //get connection
            database = connection
            logger.info("Database synced");

        })
        .catch((err) => {
            logger.error(err.message);

        })
}

export {connect};