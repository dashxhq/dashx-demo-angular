import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_JWT_TOKEN } from '../constants/constant-local-storage';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers;
    const jwtToken = localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN);
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
      url: `${process.env.NG_APP_API_BASE_URL}${req.url}`,
      headers: headers,
    });
    return next.handle(apiReq);
  }
}
