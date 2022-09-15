import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

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
  submit: boolean = false;
  subscription: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    this.successMessage = '';
    const requestBody = this.forgotPasswordForm.value;
    this.subscription = this.api.post('/forgot-password', requestBody).subscribe({
      next: (data: any) => {
        this.successMessage = data.message;
      },
      error: (error) => {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
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
