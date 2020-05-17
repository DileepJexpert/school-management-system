import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFeeRoutingModule } from './add-fee-routing.module';
import { AddFeeComponent } from './add-fee.component';

import {SharedModule} from '../../../shared/shared.module';
@NgModule({
  declarations: [AddFeeComponent],
  imports: [
    SharedModule,
    AddFeeRoutingModule
  ]
})
export class AddFeeModule { }
