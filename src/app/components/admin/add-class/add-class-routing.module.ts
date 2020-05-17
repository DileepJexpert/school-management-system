import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassComponent } from './add-class.component';


const routes: Routes = [
  {
    path: '',
    component: AddClassComponent,
    data: {
      breadcrumb: 'AddClass',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddClassRoutingModule { }
