import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ListingComponent} from "./listing/listing.component";
import {ListingListComponent} from "./listing-list/listing-list.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'inregistrare', component: SignupComponent },
  { path: 'logare', component: LoginComponent},
  { path: 'profil/:userId', component: UserProfileComponent },
  { path: 'anunt/:listingId', component: ListingComponent },
  { path: 'anunturi', component: ListingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
