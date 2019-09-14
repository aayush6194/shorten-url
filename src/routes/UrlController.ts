import { NextFunction, Request, Response } from "express";
import { urlModel } from '../models';
import handle from '../utils/errorHandler';
import * as Uid from 'uuid/v4';

class UrlController {

  static async findUrl (email : string){
    let [ url, urlErr] = await handle(urlModel.findOne({ email }));

    if (!url) throw new Error('URL already Exists');
    if (urlErr) throw new Error(urlErr);
    return url;
  }

   static async shorten(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      let { url } = req.body;
      let shortUrl =  Uid().substring(0, 6);
      await new urlModel({ url, shortUrl })
            .save();

      res.status(200)
          .send({ success: true,  shortUrl})
    }
    catch (err){
      next(err);
    }
  }
  static async getUrl(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      let { url : shortUrl } = req;
      shortUrl = shortUrl.substring(1); 
      let url = await urlModel.findOne({ shortUrl });
      res.redirect(url.url);
    }
    catch (err){
      next(err);
    }
  }
}

export default UrlController;