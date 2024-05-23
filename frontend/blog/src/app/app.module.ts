import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandpageComponent } from './landpage/landpage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { ReviewComponent } from './review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetComponent } from './reset/reset.component';
import { FilterPipe } from './shared/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandpageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CartComponent,
    ViewComponent,
    NewcomersComponent,
    ReviewComponent,
    ForgetPasswordComponent,
    ResetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
