import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import AdminComponent from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageProductComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
