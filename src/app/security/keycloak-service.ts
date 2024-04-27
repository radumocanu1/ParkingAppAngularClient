import { Injectable } from "@angular/core";
import Keycloak from "keycloak-js";

export interface UserProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  token: string;
}

@Injectable({ providedIn: "root" })
export class KeycloakService {
  _keycloak: Keycloak | undefined;
  profile: UserProfile | undefined;

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: "http://localhost:8081",
        realm: "Parco",
        clientId: "testClientID",
      });
    }
    return this._keycloak;
  }

  async init() {
    // TODO load this from a config file
    const authenticated = await this.keycloak.init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/assets/silent-check-sso.html",
    });
    if (!authenticated) {
      return authenticated;
    }
    this.profile =
      (await this.keycloak.loadUserInfo()) as unknown as UserProfile;
    this.profile.token = this.keycloak.token || "";
    console.log(this.profile);
    return true;
  }

  login() {
    return this.keycloak.login({redirectUri:"http://localhost:4200/store_token_endpoint"})
  }

  logout() {
    return this.keycloak.logout({ redirectUri: "http://localhost:4200/logare" });
  }
}
