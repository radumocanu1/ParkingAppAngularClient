import {Component, OnInit} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'menu-icons-example',
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css',
})
export class ProfileDropdownComponent implements OnInit {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
    isDropdownOpen = false;
  constructor(private readonly keycloak: KeycloakService) {}

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit(): void {
  }
  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
