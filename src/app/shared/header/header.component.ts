import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
   isLoggedIn:Observable<boolean>;
  //isLoggedIn: false; 

  constructor() { } ////constructor(private authService: AuthService) { }

  ngOnInit() {
    //this.isLoggedIn$ = this.authService.isLoggedIn;
    /*if(window.localStorage.getItem('token')) {
      //this.router.navigate(['login']);
      //return;
      this.isLoggedIn = true;
    }*/
  }

  onLoggedOut(){

  }

}
