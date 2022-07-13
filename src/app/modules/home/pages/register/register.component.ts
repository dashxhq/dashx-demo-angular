import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  error: string | undefined;
  registerForm: FormGroup;
  loading: boolean = false;
  submit: boolean = false;
  subscription: Subscription;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    const { email, password, firstName, lastName } = this.registerForm.value;
    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    this.subscription = this.api.post('/register', requestBody).subscribe({
      next: (data: any) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        const errorMessage =
          error.error.response?.data?.message || error.error.message;
        this.error = errorMessage;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
