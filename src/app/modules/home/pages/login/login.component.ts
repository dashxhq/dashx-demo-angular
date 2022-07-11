import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.error = '';
    this.loading = true;
    const requestBody = this.loginForm.value;
    this.api.post('/login', requestBody).subscribe({
      next: (data) => {
        console.log(data);
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
}
