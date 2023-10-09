import { UserParams } from "../models/auth.models";

class UserRepository {

  public async createUser({
    userName,
    password
  }: UserParams): Promise<void> {
    const isUserExist = this.checkUserExist(userName);

    if (isUserExist === true) {
      throw Error("User exist!");
    };

    const data = {
      userName,
      password,
      registerData: Date.now()
    };

    // await StorageManager
  };

  private checkUserExist(userName: string): boolean {


    return false;
  };

};

const instance = new UserRepository();

export default instance;