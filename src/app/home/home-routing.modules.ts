import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateTaskComponent } from './create-task/create-task.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
      path: 'create',
      component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
