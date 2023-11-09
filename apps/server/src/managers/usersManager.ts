import { COLLECTION_NAMES } from "../utils/firebase/collectionsNames";
import { OPERATORS } from "../utils/firebase/operators";
import { FirebaseHelper } from "../utils/firebase/firebaseHelper";
import { USER_COLLECTION_FIELDS } from "../utils/firebase/userCollectionFields";
import { UserParams } from "../models/auth.models";
import { Manager } from "../common/common.manager.config";
import { UserCollectionRecord } from "../models/database.models";
import DatabaseManager from "./databaseManager";
import { UserAlreadyExistError, UserNotFoundError } from "../utils/errors/errors";
import { DatabaseCollecectionHelper } from "../database/databaseCollectionHelper";
import { Timestamp } from "firebase-admin/firestore";

class UsersManager extends Manager {

  protected static instance: UsersManager

  constructor() {
    super();
  };

  public async getUser(userName: string): Promise<UserCollectionRecord | null> {
    try {
      const userData = await DatabaseManager.getRecordById<UserCollectionRecord>(
        DatabaseCollecectionHelper.COLLECTION_NAMES.USERS_COLLECTION,
        USER_COLLECTION_FIELDS.USERNAME,
        userName
      );

      if (userData === null) {
        throw new UserNotFoundError();
      };

      return userData;
    } catch (error) {
      console.log(error);

      return null;
    };
  };

  public async createUser({
    userName,
    password
  }: UserParams): Promise<void> {
    try {
      const isUserExist = await this.checkUserExist(userName);

      if (isUserExist === true) {
        throw new UserAlreadyExistError();
      };

      const data = this.getDataToCreateUser(userName, password);

      DatabaseManager.addRecord(
        DatabaseCollecectionHelper.COLLECTION_NAMES.USERS_COLLECTION,
        data
      );
    } catch (error) {
      console.log(error);
    };
  };

  private getDataToCreateUser(userName: string, password: string): UserCollectionRecord {
    return {
      userName,
      password,
      createdTime: Timestamp.now()
    }
  }

  private async checkUserExist(userName: string): Promise<boolean> {
    return await this.getUser(userName) === null ? false : true;
  };
};