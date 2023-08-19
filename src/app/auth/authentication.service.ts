import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = [
    { username: 'admin', password: 'admin', roles: ['ADMIN'] },
    { username: 'user', password: 'user', roles: ['USER'] },
  ];
  constructor() { }

  public login(username: string | any, password: string | any): boolean {
    if (this.checkUserIsLogged()) this.logout();

    if (this.users.some(u => u.username === username && u.password === password)) {
      localStorage.setItem('username', username);
      localStorage.setItem('roles', this.users.find(u => u.username === username && u.password === password)?.roles.join(', ') || '');
      return true;
    }
    else return false;
  }

  public logout(): void {
    localStorage.clear();
  }

  public checkUserIsLogged(): boolean {
    return localStorage.getItem('username') !== null;
  }
}
