import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationState } from './root-store';
import { SigninSuccessAction } from './root-store/registration/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  constructor(private store: Store<{registration: RegistrationState}>) {
    const u = localStorage.getItem('currentUser');
    if (u) {
      const user = JSON.parse(u);
      this.store.dispatch(new SigninSuccessAction({user}));
    }
  }

  ngOnInit () {

  }
}
