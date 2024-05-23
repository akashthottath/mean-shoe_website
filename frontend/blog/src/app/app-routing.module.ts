import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandpageComponent } from './landpage/landpage.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { ReviewComponent } from './review/review.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path:"", component:LoginComponent },
  { path:"forgetPassword", component:ForgetPasswordComponent },
  { path:"reset/:token", component:ResetComponent },
  { path:"register", component:RegisterComponent },
  { path:"landpage", component:LandpageComponent },
  { path:"about", component:AboutComponent},
  { path:"cart", component:CartComponent},
  { path:"view/:id", component:ViewComponent},
  { path:"newcomers", component:NewcomersComponent},
  { path:"review", component:ReviewComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
