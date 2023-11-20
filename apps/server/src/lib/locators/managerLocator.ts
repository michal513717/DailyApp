import { ValueOf } from "../models/common.models";
import { Managers } from "../models/manager.models";

class ManagerLocator {

  protected managers: Managers = {
    DATABASE_MANAGER: null
  };

  public registerManager(managerName: keyof Managers, managerInstance: ValueOf<Managers>): void {
    this.managers[managerName] = managerInstance;
  };

  public getManager(managerName: keyof Managers): ValueOf<Managers> | null {
    return this.managers[managerName];
  };
}

var instance = new ManagerLocator();

export default instance;