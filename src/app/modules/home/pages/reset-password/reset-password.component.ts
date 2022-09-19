import { AfterContentInit, Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode'
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit, AfterContentInit {
  error: string | undefined;
  successMessage: string | undefined;
  resetPasswordForm: FormGroup;
  loading: boolean = false;
  resetPasswordToken: string;
  submit: boolean = false;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.resetPasswordToken = param['token']
      }
    )

    if (!this.resetPasswordToken) {
      this.router.navigate(['/login']); 
    }

    this.resetPasswordForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  ngAfterContentInit() {
    if (this.resetPasswordToken) {
      const { exp }: any = jwtDecode(this.resetPasswordToken)

      if (exp < Math.trunc(Date.now() / 1000)) {
        this.error = 'Your reset password link has expired.';
      }
    }
  }

  onSubmit() {
    this.submit = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    this.successMessage = '';
    const requestBody = {
      token: this.resetPasswordToken,
      password: this.resetPasswordForm.value.password,
    };
    this.api.post('/reset-password', requestBody).subscribe({
      next: (data: any) => {
        this.successMessage = data.message;
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
