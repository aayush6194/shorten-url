import { NextFunction, Request, Response } from "express";
import * as  fs from 'fs';

function logger (req: Request, res : Response, next :  NextFunction){

     let { headers, body, originalUrl, method } =  req;

     let txt : string = `\n\n\n
     Time    : ${new Date(Date.now()).toUTCString()} \n
     Route   : ${method} \n
     METHOD  : ${originalUrl} \n
     Header  : ${JSON.stringify(headers, null, '\t')} \n
     Body    : ${JSON.stringify(body, null, '\t')}`;

     fs.appendFile('./src/logs.txt',txt , function (err : any) {
        if (err) throw err;
      });
      next();
  }

  function deleteLogs (req: Request, res : Response, next :  NextFunction){

    fs.writeFile('./logs.txt', '', function(){});
    res.status(200)
    .send({ success: true});
 }


  export { logger, deleteLogs }; 