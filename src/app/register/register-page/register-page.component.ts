import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import {   RegStoreActions , RegStoreSelectors, RegistrationState } from '../../root-store';
import { Store } from '@ngrx/store';
import { UserReg } from '../../Models/User';
import { AuthService } from '../../services/authorization/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  registerFrom: FormGroup;
  loading: boolean;
  error: string;
  isRegister: boolean;
  loadingSubScription: Subscription;
  loginSub: Subscription;
  isValidEmail: boolean;


  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private store: Store<{ registration: RegistrationState}> ) {}

  ngOnInit() {
    this.loadingSubScription = this.store.select( RegStoreSelectors.selectRegIsLoading).subscribe( (t) => {
      this.loading = t as boolean;
    });
    this.loginSub = this.store.select( RegStoreSelectors.selectRegIsLoading).subscribe( (t) => {
      if (t) {
        this.router.navigate(['home']);
      }
    });
    this.registerFrom = this.fb.group({
      email: ['', [ Validators.required , Validators.email] ],
      password: ['', [Validators.required]],
      retypepassword: ['', [Validators.required]],
      name: ['', [Validators.required]]
    }, {
      validator: this.MustMatch('password', 'retypepassword')
  });
  }

  get f() { return this.registerFrom.controls; }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.router.navigate(['home']);
    const user: UserReg = {
      name: form.controls.name.value,
      email: form.controls.email.value,
      password: form.controls.password.value
    };

    this.store.dispatch(new RegStoreActions.RegisterRequestAction({user}));

  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

checkUserName() {
  console.log('click');
  this.auth.isUserAvailable(this.registerFrom.controls.email.value).subscribe((data) => {
    console.log('data', data);
    this.isValidEmail = !data;
  });
}

ngOnDestroy () {
  this.loadingSubScription.unsubscribe();
  this.loginSub.unsubscribe();
}

}
