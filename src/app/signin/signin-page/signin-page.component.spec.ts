import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPageComponent } from './signin-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignoutingModule } from '../sigin-routing.module';
import { RouterModule, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';

describe('SigninPageComponent', () => {
  let component: SigninPageComponent;
  let fixture: ComponentFixture<SigninPageComponent>;
  const storeMock = {
    select() {
      return of({  });
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPageComponent ],
      imports: [ ReactiveFormsModule, FormsModule, SignoutingModule, AppRoutingModule, RouterTestingModule ],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
