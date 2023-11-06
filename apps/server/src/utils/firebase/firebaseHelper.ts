import { getFirestore } from "firebase-admin/firestore";
import { COLLECTION_NAMES } from './collectionsNames';

export class FirebaseHelper {

  public collections: {
    usersCollection: FirebaseFirestore.CollectionReference;
    todoCollection: FirebaseFirestore.CollectionReference;
  };

  private static instance: FirebaseHelper;

  private db: FirebaseFirestore.Firestore;

  constructor(){

    this.db = getFirestore();

    this.collections = {
      usersCollection: this.db.collection(COLLECTION_NAMES.DB_USERS),
      todoCollection: this.db.collection(COLLECTION_NAMES.DB_TODO)
    }
  };

  public static getInstance(): FirebaseHelper {
    if(!FirebaseHelper.instance) {
      FirebaseHelper.instance = new FirebaseHelper();
    }

    return FirebaseHelper.instance;
  }

  public static converterAssignTypes<T extends {}>() {
    return {
      toFirestore(doc: T): FirebaseFirestore.DocumentData {
        return doc;
      },
      fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): T {
        return snapshot.data()! as T;
      },
    };
  };

  public async getRecordByField(
    collectionName: keyof FirebaseHelper["collections"],
    field: string,
    operator: FirebaseFirestore.WhereFilterOp,
    value: string
  ) {
    const collection = this.collections[collectionName];
    const doc = await collection.where(field, operator, value).get();

    return doc.docs[0]?.data() ?? null;
  }
};