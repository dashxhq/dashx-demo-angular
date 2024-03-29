import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-box',
  templateUrl: './success-box.component.html',
  styleUrls: ['./success-box.component.css'],
})
export class SuccessBoxComponent {
  @Input() successMessage: string;
  constructor() {}
}
