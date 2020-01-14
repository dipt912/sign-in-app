import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  signIn: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit() {

    this.signIn = this.fb.group( {
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { console.log(this.signIn.controls); return this.signIn.controls; }

  onSubmit(form: FormGroup) {
    this.router.navigate(['']);
  }

}
