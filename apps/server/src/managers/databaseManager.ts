import { Collections, RecordValue } from "../models/database.models";
import { FirebaseHelper } from "../utils/firebase/firebaseHelper";

export class DatabaseManager {
  
  private static instance: DatabaseManager;
  private db!: FirebaseFirestore.Firestore;
  private collections!: Collections;

  constructor() {

    this.init();
  };

  public static getInstance(): DatabaseManager {
    if(!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }

    return DatabaseManager.instance;
  }

  private init(): void {

    this.collections = {
      USERS_COLLECTION: this.db.collection("usersCollection"),
      TODO_COLLECTION: this.db.collection("todoCollection")
    };
  };

  public async getCollection(
    collectionName: keyof Collections
  ) : Promise<FirebaseFirestore.CollectionReference>{
    return this.db.collection(collectionName);
  };

  public async getByDocId(
    collectionName: keyof Collections,
    docID: string
  ){
    try {
      return this.collections[collectionName].doc(docID);   
    } catch (error) {
      return null;
    }
  };

  public async getRecordById<T extends object>(
    collectionName: keyof Collections,
    recordID: string,
    recordValue: RecordValue
  ): Promise<T | null> {
    try {
      const record = await this.collections[collectionName]
        .where(recordID, "==", recordValue)
        .limit(1)
        .withConverter(FirebaseHelper.converterAssignTypes<T>())
        .get();

      return record.docs[0] !== undefined ? record.docs[0].data() : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  public async getRecordsById<T extends object>(
    collectionName: keyof Collections,
    recordID: string,
    recordValue: RecordValue
  ): Promise<Array<T> | []> {
    try {
      const data = await this.collections[collectionName]
        .where(recordID, "==", recordValue)
        .withConverter(FirebaseHelper.converterAssignTypes<T>())
        .get();

      const parsedData = data.docs.map((item) =>
        Object.assign({ id: item.id }, item.data())
      );

      return parsedData;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  //? Need to specify data?
  public async addRecord(
    collectionName: keyof Collections,
    data: any
  ): Promise<void> {
    try {
      await this.collections[collectionName].add(data);
    } catch (error) {
      console.log(error);
    }
  };

  public async deleteRecord(
    collectionName: keyof Collections,
    docID: string
  ): Promise<void> {
    try {
      await this.collections[collectionName].doc(docID).delete();
    } catch (error) {
      console.log(error);
    }
  };

  public async updateRecord(
    collectionName: keyof Collections,
    docID: string,
    updateData: object
  ): Promise<void> {
    try {
      await this.collections[collectionName].doc(docID).update(updateData);
    } catch (error) {
      console.log(error);
    }
  };
};

const instance = new DatabaseManager();

export default instance;