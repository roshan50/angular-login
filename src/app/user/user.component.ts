import { Component, OnInit } from '@angular/core';
// import {UserService} from './user.service'
import {USER} from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
