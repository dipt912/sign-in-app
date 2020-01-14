import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignoutingModule } from './sigin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SignoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SigninPageComponent]
})
export class SigninModule { }
