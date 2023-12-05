import { Services } from '../models/service.models';
import { ValueOf } from '../models/common.models';
import { CommonLocator } from '../../common/common.locator.config';

class ServiceLocator extends CommonLocator<Services> {

  protected services: Services = {
    AUTH_SERVICES: null,
    TOKEN_SERVICES: null
  } as unknown as Services;
}

var instance = new ServiceLocator();

export default instance;