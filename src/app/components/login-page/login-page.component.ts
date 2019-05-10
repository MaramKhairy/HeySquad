import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // cardImage = '/src/assets/celso-oliveira-405219-unsplash.jpg';
  cardImage = 'https://images.pexels.com/photos/461210/pexels-photo-461210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  userData: any;
  showLoginForm = true;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private authService: AuthService) {
  }

  ngOnInit() {
  }

  change2SignUpForm() {
    this.showLoginForm = false;

  }

  change2LoginForm() {
    this.showLoginForm = true;
  }


}
