import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationStoreModule } from './registration/registration.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    RegistrationStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule { }
