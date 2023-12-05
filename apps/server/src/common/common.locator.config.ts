

export abstract class CommonLocator<T> {
  protected services: T = {} as unknown as T;

  public registerService<K extends keyof T>(serviceName: K, serviceInstance: T[K]): void {
    this.services[serviceName] = serviceInstance;
  }

  public getService<K extends keyof T>(serviceName: K): T[K] | null {
    return this.services[serviceName];
  }
}