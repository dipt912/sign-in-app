import { Injectable } from '@angular/core';
import { User, UserReg, LoginUser } from '../../Models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isRegister: boolean;
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  constructor(private http: HttpClient) {
    this.isRegister = false;
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  register(user: UserReg) {
    return this.http.post(`${environment.backendApi}register` , user ).pipe(map( data  => {
      if (data) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data as User);
    }
    return user;
    }));
  }

  signInUser(loginUser: LoginUser) {
    return this.http.post(`${environment.backendApi}signin` , loginUser ).pipe(map(user => {
      if (user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user as User);
    }

    return user;
    }));
  }

}
