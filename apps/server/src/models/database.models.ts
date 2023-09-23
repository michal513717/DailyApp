import type { ObjectId } from "mongodb";

export type TodoCollectionRecord = {
  description: string;
  category: string;
  isDone: boolean;
  date: Date;
} & ObjectId;