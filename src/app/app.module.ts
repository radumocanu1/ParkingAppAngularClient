import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './service/user-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { ReCaptchaV3Service } from 'ngx-captcha';
import {ErrorInterceptorModule} from "./security/error-interceptor-module";
import { ListingComponent } from './listing/listing.component';
import { ListingListComponent } from './listing-list/listing-list.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule, } from "@angular/material/menu";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignupComponent,
    UserProfileComponent,
    ListingComponent,
    ListingListComponent,
    ProfileDropdownComponent,
    NavbarComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    ErrorInterceptorModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    KeycloakAngularModule,

  ],
  providers: [
    UserService,
    ReCaptchaV3Service],
  bootstrap: [AppComponent],
  exports: [
    ProfileDropdownComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
