import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public email= '';
  public password= '';

  constructor(private authenticationService:AuthenticationService) { }

  register() {
    this.authenticationService.register(this.email, this.password);
  }

  loginWithGoogle() {
    this.authenticationService.loginWithGoogle();
  }


  loginWithGithub() {
    this.authenticationService.loginWithGithub();
  }
}
