import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
  
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public isLoading: boolean = false;
  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _authService: AuthenticationService,
    private _router: Router) { }

  public onSubmit(): void {
    this.isLoading = true;
    const formValue = this.loginForm.value;

    setTimeout(() => {
      this.isLoading = false;
      if (this._authService.login(formValue?.username, formValue?.password)) {
        this._router.navigate(['products']);
      }
      else alert('Invalid credentials');
    }, 1500);
  }

  get lgf() {return this.loginForm.controls;}
}
