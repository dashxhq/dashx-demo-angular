import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import ContentOptionsBuilder from '@dashx/browser/dist/ContentOptionsBuilder';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.auth.isLoggedIn) {
        return true;
      }
  
      this.router.navigate(['/']);
      return false;
  }


}
