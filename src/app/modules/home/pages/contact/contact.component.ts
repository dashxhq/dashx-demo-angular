import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      feedback: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
