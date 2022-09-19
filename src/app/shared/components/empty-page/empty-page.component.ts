import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.css'],
})
export class EmptyPageComponent {
  @Input() message: string;
  constructor() {}
}
