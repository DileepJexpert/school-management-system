import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';
import {SharedModule} from '../../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TypographyRoutingModule,
    SharedModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [TypographyComponent]
})
export class TypographyModule { }
