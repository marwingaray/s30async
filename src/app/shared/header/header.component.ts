import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authentication: AuthenticationService) { }

  userLogin = false;

  ngOnInit() {
    this.userLogin = this.authentication.isLoggedIn('');
    this.authentication.changeLoginStatus$.subscribe(
      (estado: boolean) => this.userLogin = estado
    );
  }

  logout(){
    this.authentication.logout();
  }
}
