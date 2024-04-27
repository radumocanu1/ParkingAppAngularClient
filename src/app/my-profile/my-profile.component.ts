import {Component, OnInit} from '@angular/core';
import {MyProfile} from "../model/MyProfile";
import {UserService} from "../service/user-service.service";
import {KeycloakService} from "../security/keycloak-service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit{
  myProfile: MyProfile = new MyProfile();

  constructor(private userService: UserService, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.userService.getUserProfile().subscribe(
      (profile: MyProfile) => {
        this.myProfile = profile;
      }
    );
  }
}
