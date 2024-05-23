import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:"", component:AdminComponent },
  { path:"dashbrd", component:AdminListComponent },
  { path:"products", component:ProductsComponent },
  { path:"users", component:UsersComponent },
  { path:"add", component:AddProductComponent},
  { path:"edit/:id", component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
