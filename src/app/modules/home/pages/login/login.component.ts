import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
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

  async onSubmit() {
    const requestBody = this.loginForm.value;
    const response = await this.api.post('/login', requestBody);
    // try {
    //   const { data, status } = await this.api.post('/login', requestBody);
    //   //   if (status === 200 && token) {
    //   //     login(token)
    //   //     navigate(redirectPath, { replace: true })
    //   //     resetForm()
    //   //   }
    // } catch (error) {
    //   console.log(error);
    //   //   const errorMessage = error.response?.data?.message || error?.message
    //   //   setError(errorMessage)
    //   // } finally {
    //   //   setLoading(false)
    // }
  }
}
