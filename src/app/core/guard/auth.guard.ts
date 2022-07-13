import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  user: any;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.user.subscribe(data => {
      this.user = data
  });
  }
  canActivate(): boolean {
    if (this.user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
