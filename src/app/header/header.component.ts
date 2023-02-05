import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.isLogged();
    console.log(this.auth.user);
  }

  singOut() {
    this.auth.singOut();
  }

}
