import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLogged = false;

  constructor(private authenticationService:AuthenticationService) { }

  isLoged() {
    this.isLogged = this.authenticationService.isLogged();
  }

}
