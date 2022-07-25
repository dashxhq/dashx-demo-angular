import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-box',
  templateUrl: './success-box.component.html',
  styleUrls: ['./success-box.component.css'],
})
export class SuccessBoxComponent implements OnInit {
  @Input() successMessage: string;
  constructor() {}

  ngOnInit(): void {}
}
