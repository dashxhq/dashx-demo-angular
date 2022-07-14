import { Injectable } from '@angular/core';
import DashX from '@dashx/browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashxService {
  dashx: any
  constructor() {
    this.dashx = DashX({
      baseUri: environment.DASHX_BASE_URI,
      publicKey: environment.DASHX_PUBLIC_KEY,
      targetEnvironment: environment.DASHX_TARGET_ENVIRONMENT,
    });
  }
}
