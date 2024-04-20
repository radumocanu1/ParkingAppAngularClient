import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UUID} from "crypto";
import {UserService} from "../service/user-service.service";
import {UserProfileView} from "../model/userProfile/UserProfileView";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  user!: UserProfileView;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userService.getUser(params.get('userId')).subscribe(
        (data: UserProfileView) => this.user = data
      );
    });


  }

  sendMessage(): void {
    console.log('Mesaj trimis către utilizatorul ' + this.user.username);
  }
}
