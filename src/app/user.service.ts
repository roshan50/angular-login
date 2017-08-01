import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
  getUsers():string[]{
    return ['c1','c2','c3'];
  }
}
