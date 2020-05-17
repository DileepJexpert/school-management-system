import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Admin Components',
      status: false
    },
    children: [
      {
        path: 'addClass',
        loadChildren: () => import('./add-class/add-class.module').then(m => m.AddClassModule)
      }, {
        path: 'addFee',
        loadChildren: () => import('./add-fee/add-fee.module').then(m => m.AddFeeModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
