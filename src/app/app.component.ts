import { Component } from '@angular/core';
import {RegisterModel} from './models/register.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'message': [this.user.message, [
        Validators.required
      ]],
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'mobile': [this.user.mobile, [
        Validators.required
      ]],
      'company': [this.user.company, [
        Validators.required,
      ]],
      'industry': [this.user.industry, [
        Validators.required,
      ]],
      'attachment': [this.user.attachment, [
        Validators.required,
      ]]
    });
  }
  onRegisterSubmit() {alert(this.user.message + ' ' + this.user.name + ' ' + this.user.email + ' ' + this.user.mobile + ' ' + this.user.company + ' ' + this.user.industry + ' ' + this.user.attachment);
  }

}
