import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  error: string | undefined;
  successMessage: string | undefined;
  contactForm: FormGroup;
  loading: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      feedback: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.error = '';
    this.loading = true;
    this.successMessage = '';
    const requestBody = this.contactForm.value;
    this.api.post('/contact', requestBody).subscribe({
      next: (data) => {
        console.log(data);
        //this.successMessage = data.message
      },
      error: (error) => {
        console.log(error);
        const errorMessage = error.response?.message || error.message;
        this.error = errorMessage;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
