//@ts-nocheck
//TODO remove (changed to firebase)

import { connectToDatabase } from "../database";
import * as mongoDB from 'mongodb';
import type { WithId } from "mongodb";

export class DatabaseManager {

  private mongoClient!: mongoDB.Db;

  constructor() {

    this.connectDataBase();
  };

  private async connectDataBase(): Promise<void> {

    const client = await connectToDatabase();

    if (client !== null) {
      this.mongoClient = client;
    };
  };

  private async getDatabase(name: string): Promise<mongoDB.Collection | null> {
    try {

      return this.mongoClient.collection(name);
    } catch (err) {

      console.log(`Database dosent exits`, err)
      return null;
    }
  }

  public async getDataWithArrayFormat<T extends {}>(name: string): Promise<WithId<T>[] | null> {
    try {
      const collection = this.mongoClient.collection<T>(name);

      const data = await collection.find({}).toArray();

      return data;
    } catch (err) {

      console.log(`Get data with array format error`, err);
      return null;
    };
  };

  public async addRecord(name: string, data: Record<string, string>): Promise<void> {
    try {
      const db = await this.getDatabase(name) as mongoDB.Collection;

      if (db === null) {
        throw Error("Db not exist");
      };

      db.insert(data);
    } catch (error) {

      console.log(`Error during inserting to Db`, error);
    }
  };
};

const instance = new DatabaseManager();

export default instance;