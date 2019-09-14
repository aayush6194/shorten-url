import  { NextFunction, Request, Response } from "express";
import UrlController from './UrlController';


const SetRoutes = (app : any) => {
  //Main Controller
  app    
    .put('/shorten', UrlController.shorten)
    .get('*', UrlController.getUrl)
}

export { SetRoutes };