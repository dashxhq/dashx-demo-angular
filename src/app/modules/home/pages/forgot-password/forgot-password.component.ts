import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  error: string | undefined;
  successMessage: string | undefined;
  forgotPasswordForm: FormGroup;
  loading: boolean = false;

  constructor() {}

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
  }
}
