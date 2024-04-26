import {Component, inject} from '@angular/core';
import {SecurityStore} from "../security/security-store";
import {KeycloakService, UserProfile} from "../security/keycloak-service";

@Component({
  selector: 'menu-icons-example',
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css',
})
export class ProfileDropdownComponent {

    isDropdownOpen = false;
  securityStore = inject(SecurityStore)
  keycloakService = inject(KeycloakService)
  constructor() {}

  toggleDropdown(): void {
    console.log(this.securityStore.isLoggedIn);
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log("deschis? " + this.isDropdownOpen);
    console.log(this.keycloakService.profile);
  }
}
