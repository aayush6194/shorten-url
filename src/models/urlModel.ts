import * as Mongoose from 'mongoose';
import * as Uid from 'uuid/v4';

let urlSchema = new Mongoose.Schema({
  url : String,
  shortUrl : String,
  createdOn: Date
});

//this refers to document
urlSchema.pre('save', function(next : any) {
  if (!this.createdOn) {
    this.createdOn = new Date();
  }
  // if(!this.code || isCode.bind(this)(this.code)){
  //   this.code = Uid().substring(0,6);
  // }

  next();
});

urlSchema.methods.toJson = function() {
  let obj = this.toObject();
  return obj;
}








export default Mongoose.model("url", urlSchema);