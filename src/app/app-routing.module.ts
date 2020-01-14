import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as signin from './signin/signin.module';
import * as register from './register/register.module';

const routes: Routes = [
  { path: 'signin',
      loadChildren: () => signin.SigninModule
   },
   { path: 'register',
      loadChildren: () => register.RegisterModule
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
