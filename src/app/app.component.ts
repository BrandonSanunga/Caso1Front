import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) {

  }
  ngOnInit(): void {
    console.log(this.auth.getAccessTokenSilently);
  }

  login(){
    this.auth.loginWithRedirect();
    console.log(this.auth.getAccessTokenSilently);
    
  }

  logout(){
    this.auth.logout();
  }

}

