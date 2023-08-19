import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private roleRoutes: any = {
    'ADMIN': ['admin/products'],
    'USER': ['user/products'],
  };

  constructor() { }


  public getRoles(): string[] {
    return localStorage.getItem('roles')?.split(', ') || [];
  }

  public userHasAccess(route: string | undefined): Observable<boolean> {
    let loggedInUserRoles = this.getRoles();
    return this.roleRoutes[loggedInUserRoles[0]].includes(route || '') ? of(true) : of(false);
  }
}
