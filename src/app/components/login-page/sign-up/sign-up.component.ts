import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm = new FormGroup({
    inputEmail: new FormControl('', Validators.required),
    inputPassword: new FormControl('', Validators.required),
    inputDisplayName: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

  signUpOnSubmit() {
    this.auth.signUp(
      this.loginForm.get('inputEmail').value,
      this.loginForm.get('inputPassword').value,
      this.loginForm.get('inputDisplayName').value);
  }
}
