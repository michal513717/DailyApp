import { getFirestore } from "firebase-admin/firestore";
import { COLLECTION_NAMES } from './collectionsNames';

export class FirebaseHelper {

  public collections!: {
    usersCollection: FirebaseFirestore.CollectionReference;
    todoCollection: FirebaseFirestore.CollectionReference;
  };

  public static OPERATORS: Record<string, FirebaseFirestore.WhereFilterOp> = {
    LESS: '<',
    LESS_EQUAL: '<=',
    EQUAL: '==',
    NOT_EQUAL: '!=',
    MORE_EQUAL: '>=',
    MORE: '>',
    ARRAY_INCLUDE: 'array-contains',
    IN: 'in',
    NOT_IN: 'not-in',
    ARRAY_CONTAINER_ANY: 'array-contains-any'
  };

  private static COLLECTION_NAMES: Record<string, string> = {
    DB_USERS: 'usersCollection',
    DB_TODO: 'todoCollection'
  };

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
};