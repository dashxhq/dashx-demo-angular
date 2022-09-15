import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loading: boolean = false;
  loginForm: FormGroup;
  submit: boolean = false;
  subscription: Subscription;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    const requestBody = this.loginForm.value;
    this.subscription = this.api.post('/login', requestBody).subscribe({
      next: (data: any) => {
        this.auth.login(data.token, requestBody.rememberMe);
      },
      error: (error) => {
        const errorMessage =
          error.error.response?.data?.message || error.error.message;
        this.error = errorMessage;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
    });
  }
}
