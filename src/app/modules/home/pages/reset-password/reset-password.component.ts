import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';

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
  resetPasswordToken: string = 'abc';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.error = '';
    this.loading = true;
    this.successMessage = '';
    const requestBody = {
      token: this.resetPasswordToken,
      password: this.resetPasswordForm.value.password,
    };
    this.api.post('/reset-password', requestBody).subscribe({
      next: (data) => {
        console.log(data);
        //this.successMessage = data.message
      },
      error: (error) => {
        const errorMessage =
          error?.message ||
          error.response?.message ||
          'Something went wrong, please try later';
        this.error = errorMessage;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
