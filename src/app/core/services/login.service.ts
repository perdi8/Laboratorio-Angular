import { EventEmitter, Injectable, Output } from '@angular/core';
import { userData } from '../mocks/mock-user';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData: User;

  @Output()
  logged: EventEmitter<boolean> = new EventEmitter();

  @Output()
  username: EventEmitter<string> = new EventEmitter();

  constructor() {}

  login(username: string, password: string): Boolean {
    if (username === userData.username && password === userData.password) {
      this.logged.emit(true);
      this.username.emit(username);
      return true;
    }
    return false;
  }

  isLogged(): EventEmitter<Boolean> {
    return this.logged;
  }

  logout(): void {
    this.logged.emit(false);
  }

  getUsername(): EventEmitter<string> {
    return this.username;
  }
}
