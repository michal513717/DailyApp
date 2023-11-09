import { Collections } from "../models/database.models";

export class DatabaseCollecectionHelper {
  public static COLLECTION_NAMES: Record<string, keyof Collections> = {
    USERS_COLLECTIONS: "USERS_COLLECTION",
    TODO_COLLECTION: "TODO_COLLECTION",
  };
};