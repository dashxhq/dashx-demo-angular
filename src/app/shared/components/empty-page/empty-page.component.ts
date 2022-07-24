import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.css'],
})
export class EmptyPageComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}
}