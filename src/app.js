import express from "express";
import cors from "cors";
//configer
import 'dotenv/config';
import logger from "./utils/logger";

//call
const app = express();
const PORT = process.env.PORT || "8090";

//can communicate backend with whatever third party application 
app.use(cors());
app.use(express.json({limit: "20mb"}));  //limit request body data

app.get("/", (req, res, next) => {
    res.send("<h2> 🙎 Employee Management System API </h2>");
    next();
});

app.listen(PORT, () => {
    logger.info(` Server is up and running on PORT ${PORT}`)
});
