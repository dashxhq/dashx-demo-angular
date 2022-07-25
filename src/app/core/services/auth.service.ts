import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode'
import { Subject } from 'rxjs';
import { DashxService } from './dashx.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  currentUser: any;

  constructor(private dashxService: DashxService) {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(jwtToken: string, rememberMe: Boolean) {
    localStorage.setItem('jwt-token', jwtToken)
    const decodedToken: any = jwtDecode(jwtToken)
    const dashxToken = decodedToken.dashx_token
    const decodedUser = decodedToken.user
    this.dashxService.dashx.setIdentity(decodedUser.id, dashxToken)
    this.currentUser = decodedUser
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(this.currentUser))
    }
  }

  logout() {
    localStorage.removeItem('jwt-token')
    this.currentUser = null
  }
}
