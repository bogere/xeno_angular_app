import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router:Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  activateLoggedIn() : void {
     let token = window.localStorage.getItem('token');
     if (token) {
       this.loggedIn.next(true);
       this.router.navigate(['/list-teacher'])
     }
  }

  activateLoggedOut() : void {
     window.localStorage.removeItem('token');
     this.loggedIn.next(false);
     this.router.navigate(['/login']);
  }
}
