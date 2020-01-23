import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninModule } from './signin/signin.module';
import { RegisterModule } from './register/register.module';
import { MatInputModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { RootStoreModule } from './root-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninModule,
    RegisterModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    HomeModule,
    RootStoreModule,
    !environment.production && StoreDevtoolsModule.instrument({
      maxAge: 10
    }) || []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
