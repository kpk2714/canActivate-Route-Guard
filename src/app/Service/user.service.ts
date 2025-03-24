import { Injectable } from '@angular/core';
import { User } from '../Modal/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User[] = [
    new User(101, 'Suresh', 'S101', 'S101'),
    new User(102, 'Raina', 'R102', 'R102')
  ]
}
