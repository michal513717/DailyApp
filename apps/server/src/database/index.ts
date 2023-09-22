import { MongoClient } from "mongodb";
import * as mongoDB from 'mongodb';
import { env } from "../utils/env";

export async function connectToDatabase(): Promise<mongoDB.Db | null> {
  try {
    const client: MongoClient = new MongoClient(env.DB_CONN_URL);

    await client.connect();
  
    const db: mongoDB.Db = client.db(env.DB_NAME);
  
    console.log(`Successfully connected to database: ${db.databaseName}.`);
  
    return db; 
  } catch (error) {
    
    console.log(`Error during connection database`, error);

    return null;
  }
};