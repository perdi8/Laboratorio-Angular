import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isValidLogin: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin(event) {
    event.preventDefault();
    this.isValidLogin = this.loginService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    if (this.isValidLogin) {
      console.log('logged correctly');
      this.router.navigate([`/dashboard`]);
    }
  }
  ngOnInit(): void {}
}
