import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import ContentOptionsBuilder from '@dashx/browser/dist/ContentOptionsBuilder';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  user: any;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.user.subscribe(data => {
        this.user = data
    });
  }
  canActivate(): boolean {
    if (!this.user) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
