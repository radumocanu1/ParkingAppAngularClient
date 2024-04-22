import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './service/user-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import {MatButton, MatIconButton} from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { ReCaptchaV3Service } from 'ngx-captcha';
import {SecurityInterceptor} from "./service/security/security-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatIconButton,
    MatButton,
  ],
  providers: [UserService, ReCaptchaV3Service,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // This is the change you need to make
})
export class AppModule { }
