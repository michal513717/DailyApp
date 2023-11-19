import { Services } from '../models/service.models';
import { ValueOf } from '../models/common.models';

class ServiceLocator {

  protected services: Services = {
    AuthService: null
  };

  public registerService(serviceName: keyof Services, serviceInstance: ValueOf<Services>): void {
    this.services[serviceName] = serviceInstance;
  };

  public getService(serviceName: keyof Services): ValueOf<Services> {
    return this.services[serviceName];
  };
}

export const serviceLocator = new ServiceLocator();