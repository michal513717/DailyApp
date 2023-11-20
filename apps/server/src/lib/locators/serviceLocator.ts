import { Services } from '../models/service.models';
import { ValueOf } from '../models/common.models';

class ServiceLocator {

  protected services: Services = {
    AUTH_SERVICES: null
  };

  public registerService(serviceName: keyof Services, serviceInstance: ValueOf<Services>): void {
    this.services[serviceName] = serviceInstance;
  };

  public getService(serviceName: keyof Services): ValueOf<Services> | null {
    return this.services[serviceName];
  };
}

var instance = new ServiceLocator();

export default instance;