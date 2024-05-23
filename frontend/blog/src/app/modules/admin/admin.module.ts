import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditComponent } from './edit/edit.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsersPipe } from './pipes/users.pipe';
import { ProductsPipe } from './pipes/products.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    AdminListComponent,
    AddProductComponent,
    EditComponent,
    ProductsComponent,
    UsersComponent,
    MainNavComponent,
    GraphOneComponent,
    GraphTwoComponent,
    AdminnavComponent,
    UsersPipe,
    ProductsPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
