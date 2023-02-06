import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email= '';
  public password= '';

  constructor(private authenticationService:AuthenticationService) { }

  login() {
    this.authenticationService.login(this.email, this.password);
  }

  loginWithGoogle() {
    this.authenticationService.loginWithGoogle();
  }

  loginWithGithub() {
    this.authenticationService.loginWithGithub();
  }
}
