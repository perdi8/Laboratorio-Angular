import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/components/public/menu-public/home/home.component';
import { LoginComponent } from './layout/components/public/menu-public/login/login.component';
import { AboutComponent } from './layout/components/public/menu-public/about/about.component';
import { CRUDComponent } from './layout/components/private/menu-private/crud/crud.component';
import { DashboardComponent } from './layout/components/private/menu-private/dashboard/dashboard.component';
import { GaleryComponent } from './layout/components/private/menu-private/galery/galery.component';
import { ProfileComponent } from './layout/components/private/menu-private/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crud', component: CRUDComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
