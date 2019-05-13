import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SquadComponent } from './components/squad/squad.component';
import { SignInComponent } from './components/login-page/sign-in/sign-in.component';
import { SignUpComponent } from './components/login-page/sign-up/sign-up.component';


const config = {
  apiKey: 'AIzaSyB4Gk-M1vhH3OnyCt6zozLNS2LGULP7fDc',
  authDomain: 'heysquad-1.firebaseapp.com',
  databaseURL: 'https://heysquad-1.firebaseio.com',
  projectId: 'heysquad-1',
  storageBucket: 'heysquad-1.appspot.com',
  messagingSenderId: '994402043399',
  appId: '1:994402043399:web:5a9f32f3fc4fa5ad'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    NavigationComponent,
    ProfileComponent,
    SettingsComponent,
    SquadComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    FlexLayoutModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
