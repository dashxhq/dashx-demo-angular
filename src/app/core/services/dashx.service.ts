import { Injectable } from '@angular/core';
import DashX from '@dashx/browser';

@Injectable({
  providedIn: 'root',
})
export class DashxService {
  dashx: any
  constructor() {
    this.dashx = DashX({
      baseUri: process.env.NG_APP_DASHX_BASE_URI,
      publicKey: process.env.NG_APP_DASHX_PUBLIC_KEY,
      targetEnvironment: process.env.NG_APP_DASHX_TARGET_ENVIRONMENT,
    });
  }
}
