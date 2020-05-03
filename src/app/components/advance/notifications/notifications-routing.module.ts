import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotificationsComponent} from './notifications.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    data: {
      breadcrumb: 'Notifications',
      status: true
    }
  },
  { path: 'details/:id', component: NotificationsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
