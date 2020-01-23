import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  StoreModule } from '@ngrx/store';
import { registrationReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('registration', registrationReducer),
    EffectsModule.forFeature([RegistrationStoreEffects])
  ],
  declarations: []
})
export class RegistrationStoreModule { }
