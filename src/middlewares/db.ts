import * as Mongoose from "mongoose";

const ConnectDB = (URI : string) => {
  return new Promise((resolve, reject)=>{
    Mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true})
    .then((res, err)=>{
      if(err) reject();
      console.log("Connected to DB.")
      resolve();
    })
  })
}

const CloseDB = (URI : string) => {
  return Mongoose.disconnect();
}

export default ConnectDB;