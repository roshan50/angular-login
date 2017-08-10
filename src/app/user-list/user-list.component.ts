import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {USER} from '../user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users;
  title  = 'Users:';
  selectedUser: USER;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .then(users => this.users = users);
    console.log(this.users);
  }

  onSelect(user: USER): void {
    this.selectedUser = user;
  }

}
