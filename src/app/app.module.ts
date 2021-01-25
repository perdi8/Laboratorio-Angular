import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './layout/components/private/menu-private/dashboard/dashboard.component';
import { GaleryComponent } from './layout/components/private/menu-private/galery/galery.component';
import { CRUDComponent } from './layout/components/private/menu-private/crud/crud.component';
import { ProfileComponent } from './layout/components/private/menu-private/profile/profile.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { MenuPublicComponent } from './layout/components/public/menu-public/menu-public.component';
import { HomeComponent } from './layout/components/public/menu-public/home/home.component';
import { LoginComponent } from './layout/components/public/menu-public/login/login.component';
import { AboutComponent } from './layout/components/public/menu-public/about/about.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuPrivateComponent } from './layout/components/private/menu-private/menu-private.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GaleryComponent,
    CRUDComponent,
    ProfileComponent,
    HeaderComponent,
    MenuPublicComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    MenuPrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
