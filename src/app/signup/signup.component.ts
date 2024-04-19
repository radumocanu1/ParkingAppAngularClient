import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import {User} from "../model/user";
import {catchError, of, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }


  onSubmit() {
    this.userService.save(this.user)
      .pipe(
        catchError(err => {
          this.errorMessage = err.error.errors;
          console.error(this.errorMessage);
          return of()
        })
      )
      .subscribe(res => this.gotoUserList())
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
