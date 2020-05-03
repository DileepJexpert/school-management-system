import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail.component';


const routes: Routes = [
  {
    path: '',
    component: StudentDetailComponent,
    data: {
      breadcrumb: 'Button',
      status: true
    }
  },
  { path: 'details/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailRoutingModule { }
