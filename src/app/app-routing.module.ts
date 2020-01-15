import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninModule} from './signin/signin.module';
import {  RegisterModule } from './register/register.module';

export function loadSignInPageModule() {
  return SigninModule;
}

export function RegisterpageModule() {
  return RegisterModule;
}

const routes: Routes = [
  { path: 'signin',
      loadChildren: loadSignInPageModule
   },
   { path: 'register',
      loadChildren: RegisterpageModule
   },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
