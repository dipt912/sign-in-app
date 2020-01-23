import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninModule} from './signin/signin.module';
import {  RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './helpers/auth.guard';

export function loadSignInPageModule() {
  return SigninModule;
}

export function RegisterpageModule() {
  return RegisterModule;
}
export function HomepageModuleLoading() {
  return  HomeModule;
}

const routes: Routes = [
  {
    path: 'home',
    loadChildren: HomepageModuleLoading,
    canActivate : [AuthGuard]
  },
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
