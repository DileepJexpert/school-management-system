import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from "./services/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ConfigureFeeComponent } from './components/fee/configure-fee/configure-fee.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent,
    ConfigureFeeComponent
   
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [ApiService,

],
  bootstrap: [AppComponent]
})
export class AppModule { }
