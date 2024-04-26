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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { ReCaptchaV3Service } from 'ngx-captcha';
import {InterceptorModule} from "./security/interceptor-module";
import {ErrorInterceptorModule} from "./security/error-interceptor-module";
import { ListingComponent } from './listing/listing.component';
import { ListingListComponent } from './listing-list/listing-list.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenu, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    InterceptorModule,
    ErrorInterceptorModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [UserService, ReCaptchaV3Service],
  bootstrap: [AppComponent],
  exports: [
    ProfileDropdownComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // This is the change you need to make
})
export class AppModule { }
