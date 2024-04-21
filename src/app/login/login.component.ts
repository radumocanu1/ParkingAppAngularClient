// login.component.ts
import {Component, inject} from '@angular/core';
import {SecurityStore} from "../service/security/security-store";
import {User} from "../service/security/models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameOrEmail: string | undefined;
  password: string | undefined;
  isHuman: boolean = false;
  user: User | undefined
  securityStore = inject(SecurityStore)

  login() {
    // Adăugați aici logica pentru procesul de autentificare
  }

  onCaptchaVerify(response: string) {
    this.isHuman = true; // sau folosește logica suplimentară pentru a verifica răspunsul reCAPTCHA
  }
}
