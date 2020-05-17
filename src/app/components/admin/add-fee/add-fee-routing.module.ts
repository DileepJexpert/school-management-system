import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFeeComponent } from './add-fee.component';


const routes: Routes = [

  {
    path: '',
    component: AddFeeComponent,
    data: {
      breadcrumb: 'AddFee',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFeeRoutingModule { }
