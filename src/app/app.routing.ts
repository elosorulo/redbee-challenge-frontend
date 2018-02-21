import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InterestsComponent} from "./interests/interests.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent } ,
  { path: 'interests', component: InterestsComponent } ,
  { path: 'dashboard', component: DashboardComponent } ,
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);