import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../model/userDTO';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: UserDTO[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe((data: UserDTO[]) => {
      console.log(data)
      this.users = data;
    });
   ;
  }
}
