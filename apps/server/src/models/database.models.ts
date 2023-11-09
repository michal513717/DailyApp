import { Timestamp } from "firebase-admin/firestore";

export type TodoCollectionRecord = {
  description: string;
  category: string;
  isDone: boolean;
  date: Date;
};

export type UserCollectionRecord = {
  userName: string;
  password: string;
  createdTime: Timestamp;
};

export type Collections = {
  USERS_COLLECTION: FirebaseFirestore.CollectionReference;
  TODO_COLLECTION: FirebaseFirestore.CollectionReference;
};

export type RecordValue = string | boolean | Timestamp | number;