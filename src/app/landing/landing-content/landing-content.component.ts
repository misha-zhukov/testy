import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../constants';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  const emailValidators = [
    Validators.pattern(EMAIL_PATTERN),
  ];
  emailValidators.push(Validators.required);
  const passwordValidators = [
    Validators.minLength(6),
    Validators.maxLength(50),
  ];
  passwordValidators.push(Validators.required);

  this.loginForm = this.fb.group({
    email: this.fb.control('', [...emailValidators]),
    password: this.fb.control('', [...passwordValidators]),
    rememberMe: this.fb.control(''),
  });
}
}
