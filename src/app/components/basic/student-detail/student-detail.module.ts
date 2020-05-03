import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailRoutingModule } from './student-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailComponent } from './student-detail.component';



@NgModule({
  declarations: [StudentDetailComponent],
  imports: [
    CommonModule,
    StudentDetailRoutingModule,
    SharedModule
  ]
})
export class StudentDetailModule { }
