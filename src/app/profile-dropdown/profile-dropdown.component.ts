import {Component, inject} from '@angular/core';
import {SecurityStore} from "../security/security-store";

@Component({
  selector: 'menu-icons-example',
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css',
})
export class ProfileDropdownComponent {

    isDropdownOpen = false;
  securityStore = inject(SecurityStore)
  constructor() {}

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
