import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  error: string | undefined;
  successMessage: string | undefined;
  resetPasswordForm: FormGroup;
  loading: boolean = false;

  constructor() {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.resetPasswordForm.value);
  }
}
