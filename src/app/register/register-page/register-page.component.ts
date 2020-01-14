import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerFrom: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.registerFrom = this.fb.group({
      email: ['', [ Validators.required , Validators.email] ],
      password: ['', [Validators.required]],
      retypepassword: ['', [Validators.required]]
    }, {
      validator: this.MustMatch('password', 'retypepassword')
  });
  }

  get f() { console.log(this.registerFrom.controls); return this.registerFrom.controls; }

  onSubmit(form: FormGroup) {
    console.log('submit', form);
    this.router.navigate(['']);
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

}
