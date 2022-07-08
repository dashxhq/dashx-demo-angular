import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css'],
})
export class AlertBoxComponent implements OnInit {
  @Input() alertMessage: string;
  constructor() {}

  ngOnInit(): void {}
}
