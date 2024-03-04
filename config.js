import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const Client = new MongoClient(process.env.MONGO_URL,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    serverSelectionTimeoutMS: 15000,
  }
});

const Rundb = async()=> {
    try {
      await Client.connect();
      await Client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      return Client;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    } finally {
      await Client.close();
    }
  }

export default Rundb;