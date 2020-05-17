import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClassRoutingModule } from './add-class-routing.module';
import { AddClassComponent } from './add-class.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [AddClassComponent],
  imports: [
    SharedModule,
    AddClassRoutingModule
  ]
})
export class AddClassModule { }
