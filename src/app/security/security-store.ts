import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { KeycloakService } from './keycloak-service';
import { ANONYMOUS_USER, User } from './models';
import { isPlatformServer } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SecurityStore {
  #keycloakService = inject(KeycloakService);


  isLoggedIn:any
  constructor() {
    this.onInit();
  }

  async onInit() {
    const keycloakService = inject(KeycloakService);
    this.isLoggedIn = await keycloakService.init();
    if (this.isLoggedIn && keycloakService.profile) {
      const {sub, email, given_name, family_name, token} =
        keycloakService.profile;
      const user = {
        id: sub,
        email,
        name: `${given_name} ${family_name}`,
        anonymous: false,
        bearer: token,
      };
    }
  }

  async signIn() {
    await this.#keycloakService.login();
  }

  async signOut() {
    await this.#keycloakService.logout();
  }
}
