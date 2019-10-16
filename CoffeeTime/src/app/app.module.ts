import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrewMethodsComponent } from './components/brew-methods/brew-methods.component';
import { ShopsComponent } from './components/shops/shops.component';
import { GradingComponent } from './components/grading/grading.component';
import { PersonalLogComponent } from './components/personal-log/personal-log.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BrewMethodsComponent,
    ShopsComponent,
    GradingComponent,
    PersonalLogComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
