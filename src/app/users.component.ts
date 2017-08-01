import {Component} from '@angular/core'
import {UserService} from './user.service'
import {USER} from './user'

const USERS: USER[] = [
{ id: 11, name: 'Mr. Nice' },
{ id: 12, name: 'Narco' },
{ id: 13, name: 'Bombasto' },
{ id: 14, name: 'Celeritas' },
{ id: 15, name: 'Magneta' },
{ id: 16, name: 'RubberMan' },
{ id: 17, name: 'Dynama' },
{ id: 18, name: 'Dr IQ' },
{ id: 19, name: 'Magma' },
{ id: 20, name: 'Tornado' }
];


@Component({
  selector : 'users',
  template: `
      <h1>{{title}}</h1>
      <ul class="users">
        <li *ngFor="let user of users"
          [class.selected]="user === selectedUser"
          (click)="onSelect(user)">
          <span class="badge">{{user.id}}</span> {{user.name}}
        </li>
      </ul>
      `,
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})




export class UsersComponent{
  title  = 'Users:';

  users = USERS;
  selectedUser: USER;

  onSelect(user: USER): void {
    this.selectedUser = user;
  }
  // users;
  // constructor(private userService : UserService){
  //   this.users = this.userService.getUsers();
  // }
}
