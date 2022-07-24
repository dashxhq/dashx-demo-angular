import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  error: string | undefined;
  loading: boolean = false;
  postForm: FormGroup;
  submit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      text: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.postForm.invalid) {
      return;
    }
    console.log(this.postForm);
    this.dialogRef.close(this.postForm);
  }

  handleClose() {
    this.dialogRef.close();
  }
}
