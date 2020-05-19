import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClassRoutingModule } from './add-class-routing.module';
import { AddClassComponent } from './add-class.component';
import {SharedModule} from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from './sortable.directive';

@NgModule({
  declarations: [AddClassComponent,NgbdSortableHeader],
  imports: [
    SharedModule,
    AddClassRoutingModule
  ]
})
export class AddClassModule { }
