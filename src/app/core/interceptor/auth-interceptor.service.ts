import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers;
    const jwtToken = localStorage.getItem('jwt-token');
    if (jwtToken) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }
    const apiReq = req.clone({
      url: `https://node.dashxdemo.com${req.url}`,
      headers: headers,
    });
    return next.handle(apiReq);
  }
}
