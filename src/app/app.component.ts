import { Component } from '@angular/core';
import { AuthenticationService } from './auth/services/authentication.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store app';

  constructor(public _authService: AuthenticationService,
    private _router: Router) { }

  public logout() {
    if (this._authService.logout()) {
      this._router.navigate(['/login']);
    }
  }
}
