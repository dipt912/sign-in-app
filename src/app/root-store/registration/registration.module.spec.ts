import { RegistrationStoreModule } from './registration.module';

describe('MyFeatureStoreModule', () => {
  let myFeatureStoreModule: RegistrationStoreModule;

  beforeEach(() => {
    myFeatureStoreModule = new RegistrationStoreModule();
  });

  it('should create an instance', () => {
    expect(myFeatureStoreModule).toBeTruthy();
  });
});
