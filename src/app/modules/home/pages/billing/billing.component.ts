import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashxService } from 'src/app/core/services/dashx.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit, AfterContentInit {
  constructor(private dashxService: DashxService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.dashxService.dashx.track('Page Viewed', { path: this.router.url });
  }
}
