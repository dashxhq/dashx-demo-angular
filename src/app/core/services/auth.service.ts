import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode'
import { LOCAL_STORAGE_JWT_TOKEN, LOCAL_STORAGE_USER } from '../constants/constant-local-storage';
import { DashxService } from './dashx.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = null;
  currentUser: any | null;

  constructor(private dashxService: DashxService) {
    this.token = localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN)
    this.currentUser = localStorage.getItem(LOCAL_STORAGE_USER)
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  login(jwtToken: string, rememberMe: Boolean) {
    localStorage.setItem(LOCAL_STORAGE_JWT_TOKEN, jwtToken)
    const decodedToken: any = jwtDecode(jwtToken)
    const dashxToken = decodedToken.dashx_token
    const decodedUser = decodedToken.user
    this.dashxService.dashx.setIdentity(decodedUser.id, dashxToken)
    this.currentUser = decodedUser
    if (rememberMe) {
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(this.currentUser))
    }
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_JWT_TOKEN)
    this.currentUser = null
  }
}
