import {Component, inject} from '@angular/core';
import {SecurityStore} from "../security/security-store";

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css',
})
export class ProfileDropdownComponent {

  isDropdownOpen = false;
  securityStore = inject(SecurityStore)

  constructor() {}

  toggleDropdown(): void {
    console.log(this.securityStore.isLoggedIn);
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
