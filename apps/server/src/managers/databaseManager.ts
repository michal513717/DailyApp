//@ts-nocheck
//TODO remove (changed to firebase)

import { connectToDatabase } from "../database";
import * as mongoDB from 'mongodb';
import type { WithId } from "mongodb";

export class DatabaseManager {

  private mongoClient!: mongoDB.Db;

  constructor(){

    this.connectDataBase();
  };

  private async connectDataBase(): Promise<void> {
    
    const client = await connectToDatabase();
    
    if(client !== null){
      this.mongoClient = client;
    };
  };

  public async getDatabase(name: string): Promise<mongoDB.Collection | null> {
    try {
      
      return this.mongoClient.collection("Todo")
    } catch(err) {
      
      console.log(`Database dosent exits`, err)
      return null;
    }
  }
  
  public async getDataWithArrayFormat<T extends {}>(name: string): Promise<WithId<T>[] | null> {
    try {
      const collection = this.mongoClient.collection<T>(name);

      const data = await collection.find({}).toArray();
      
      return data;
    } catch(err){

      console.log(`Get data with array format error`, err);
      return null;
    };
  };
};

// export const databaseManager = new DatabaseManager();