import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { LoginService } from './login/login-service.service';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home1', canActivate:[AuthGuard],  component: HomecomponentComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {enableTracing:true})
  ],
  declarations: [
    AppComponent,
    HomecomponentComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],

  exports:[RouterModule],
  
  providers: [AppComponent, LoginService, {provide:APP_BASE_HREF, useValue:'/'}, AuthGuard],
  bootstrap: [AppComponent ]
})
export class AppModule { }
