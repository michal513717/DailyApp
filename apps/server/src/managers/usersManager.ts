import { COLLECTION_NAMES } from "../utils/firebase/collectionsNames";
import { OPERATORS } from "../utils/firebase/operators";
import { FirebaseHelper } from "../utils/firebase/firebaseHelper";
import { USER_COLLECTION_FIELDS } from "../utils/firebase/userCollectionFields";



class UsersManager {

  private static instance: UsersManager
  private firebaseHelper: FirebaseHelper;

  constructor(){

    this.firebaseHelper = FirebaseHelper.getInstance();
  };

  public static getInstance(): UsersManager {
    if(!UsersManager.instance) {
      UsersManager.instance = new UsersManager();
    }

    return UsersManager.instance;
  };

  public async getUser(userName: string) {
    const user = this.firebaseHelper.getRecordByField(
      COLLECTION_NAMES.DB_USERS,
      USER_COLLECTION_FIELDS.USERNAME,
      OPERATORS.EQUAL,
      userName
    )
    
  };
};