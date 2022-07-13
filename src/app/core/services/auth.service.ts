import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode'
import { Subject } from 'rxjs';
import { DashxService } from './dashx.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  user = new Subject<object | null>();

  constructor(private dashx: DashxService) {}

  login(jwtToken: string) {
    localStorage.setItem('jwt-token', jwtToken)
    const decodedToken: any = jwtDecode(jwtToken)
    const dashxToken = decodedToken.dashx_token
    const decodedUser = decodedToken.user
    //this.dashx.setIdentity(decodedUser.id, dashxToken)
    this.user.next(decodedUser)
  }

  logout() {
    localStorage.removeItem('jwt-token')
    this.user.next(null)
  }
}
