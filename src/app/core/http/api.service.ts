import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post(url: string, body: object) {
    console.log(url, body);
    this.http.post(url, body).subscribe((response) => {
      return response;
    });
  }
}
