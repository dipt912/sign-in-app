import { HomeModule } from './home.module';
import { ComponentFixture } from '@angular/core/testing';

describe('HomeModule', () => {
  let homeModule: HomeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
