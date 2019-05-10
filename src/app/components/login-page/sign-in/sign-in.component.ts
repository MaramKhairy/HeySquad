import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    inputEmail: new FormControl('', Validators.required),
    inputPassword: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

  loginOnSubmit() {
    console.log('trying to log in...' + this.loginForm.get('inputEmail').value + ' ' + this.loginForm.get('inputPassword').value);
    this.auth.login(this.loginForm.get('inputEmail').value, this.loginForm.get('inputPassword').value);
  }
}
