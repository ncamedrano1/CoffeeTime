import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BrewMethodsComponent } from './components/brew-methods/brew-methods.component';
import { GradingComponent } from './components/grading/grading.component';
import { PersonalLogComponent } from './components/personal-log/personal-log.component';
import { ShopsComponent } from './components/shops/shops.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'brew-methods',
    component: BrewMethodsComponent
  },
  {
    path:'grading',
    component: GradingComponent
  },
  {
    path: 'personal-log',
    component: PersonalLogComponent
  },
  {
    path: 'shops',
    component: ShopsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
