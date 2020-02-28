import { NextFunction, Request, Response } from "express";
import { urlModel } from '../models';
import handle from '../utils/errorHandler';
import * as Uid from 'uuid/v4';
import * as validUrl from 'valid-url';

class UrlController {

  static async findUrl (email : string){
    let [ url, urlErr] = await handle(urlModel.findOne({ email }));

    if (!url) throw new Error('URL already Exists');
    if (urlErr) throw new Error(urlErr);
    return url;
  }

   static async shorten(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      const { host : myURL }= req.headers;
      let { url } = req.body;
      console.log(url)
      let shortUrl =  Uid().substring(0, 6);
      if(!validUrl.isUri(url)) return next("Not a Valid URL");
      await new urlModel({ url, shortUrl })
            .save();
            shortUrl = 'https://www.short-uris.com/api/' + shortUrl;
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
      shortUrl = shortUrl.substring(1,7);
      console.log(shortUrl) 
      let url = await urlModel.findOne({ shortUrl });
      if(!url) return next("Error");
      url = url.url;
      url = url.indexOf("http") === 0 ? url :  "http://" + url;
        console.log(url);
      // return res.status(301)
      //     .redirect(url); 
      res.status(200).send(`<script>window.location.href="${url}"</script>`);
    }
    catch (err){
      next(err);
    }
  }
}

export default UrlController;