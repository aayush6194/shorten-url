import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { SetRoutes } from "./routes";
import { InitMiddleWare, ConnectDB } from "./middlewares";
import { Port, MongoURI } from "./config";
import { logger, deleteLogs } from "./middlewares/logger";

const app = express();

InitMiddleWare(app);
// Request Logger
app.use("/logs", express.static("./logs.txt"));
app.use("/delete-logs", deleteLogs);
app.use(logger);

//Routes
SetRoutes(app);

app.listen(Port, "localhost");
console.log(`Running on Port : ${Port}`);

ConnectDB(MongoURI).catch((err: Error) => {
  console.log("Unable to Connect");
});

app.use(
  (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.log(err);
    res.status(400).send({ success: false, message: err.message || err });
  }
);

export default app;