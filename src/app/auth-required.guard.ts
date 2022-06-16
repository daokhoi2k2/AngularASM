import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRequiredGuard implements CanActivate {
  me: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.authService.getMe()) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private authService: AuthService) {
    this.me = this.authService.getMe();
  }

  ngDoCheck() {
     this.me = this.authService.getMe();
  }
}
