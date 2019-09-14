import * as dotenv from 'dotenv';

dotenv.config();
//To Note: Environment Variables are Always type 'String'
const Port =  Number(process.env.PORT) || 8080,
      MongoURI = process.env.MONGOURI || "mongodb://test:test12@ds345587.mlab.com:45587/proj-mng";

export { Port, MongoURI };