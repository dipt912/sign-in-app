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

  constructor( private fb: FormBuilder,
               private router: Router,
              private authApi: AuthService,
              private store: Store<{ registration: RegistrationState}> ) { }

  ngOnInit() {
    this.loadingSubScription = this.store.select( RegStoreSelectors.selectRegIsLoading).subscribe( (t) => {
      this.loading = t as boolean;
    });
    this.loginSub = this.store.select( RegStoreSelectors.selectRegIsLoading).subscribe( (t) => {
      if (t) {
        this.router.navigate(['home']);
      }
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
  }

}
