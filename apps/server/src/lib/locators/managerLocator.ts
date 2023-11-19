import { ValueOf } from "../models/common.models";
import { Managers } from "../models/manager.models";

class ManagerLocator {

  protected managers: Managers = {};

  public registerManager(managerName: keyof Managers, managerInstance: ValueOf<Managers>): void {
    this.managers[managerName] = managerInstance;
  };

  public getManager(managerName: keyof Managers): ValueOf<Managers> {
    return this.managers[managerName];
  };
}

export const managerLocator = new ManagerLocator();