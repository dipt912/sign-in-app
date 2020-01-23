import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authorization/auth.service';
import { first, take } from 'rxjs/operators';

import { RootStoreState , RegStoreActions , RegStoreSelectors, RootStoreSelectors, RegistrationState } from '../../root-store';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoginUser } from '../../Models/User';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit, OnDestroy {
  signIn: FormGroup;
  loading: boolean;
  error: string;
  isRegister: boolean;
  loadingSubScription: Subscription;
  loginSub: Subscription;
  isError: boolean;
  errorSub: Subscription;

  constructor( private fb: FormBuilder,
               private router: Router,
              private store: Store<{ registration: RegistrationState}> ) { }

  ngOnInit() {
    this.loadingSubScription = this.store.select( RegStoreSelectors.selectRegIsLoading).subscribe( (t) => {
      this.loading = t as boolean;
    });
    this.loginSub = this.store.select( RegStoreSelectors.selectRegUser).subscribe( (t) => {
      console.log('selectRegIsLoading', t);
      if (t) {
        this.router.navigate(['home']);
      }
    });
    this.errorSub = this.store.select( RegStoreSelectors.selectRegstrationError).subscribe( (t) => {
      console.log('error sub', t);
      this.isError = t;
 });
    this.signIn = this.fb.group( {
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    console.log('Error', this.error);
  }
  get f() { return this.signIn.controls; }

  onSubmit(form: FormGroup) {
    const user: LoginUser = {
      email: form.controls.email.value,
      password: form.controls.password.value
    };

    this.store.dispatch( new RegStoreActions.SigninRequestAction({user}));
  }

  ngOnDestroy () {
    this.loadingSubScription.unsubscribe();
    this.loginSub.unsubscribe();
    this.errorSub.unsubscribe();
  }

}
