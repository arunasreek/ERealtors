import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERelators';
  currentUser: any;
  currentUserSubscription: Subscription;
  route: string;

  isNavbarShow: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    location: Location
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {

      this.currentUser = user;
    });


    if (this.authenticationService.currentUserValue) {
      this.isNavbarShow = true
    }else{
      this.isNavbarShow = false;
    }
  }

  logout() {
    this.isNavbarShow = false;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
