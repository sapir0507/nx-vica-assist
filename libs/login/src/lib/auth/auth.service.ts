import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {SessionQuery} from '@proj/login'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private qurey: SessionQuery,
    public router: Router
  ) 
  { 
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const expectedRole = route.data['expectedRole']
    
    if ( this.qurey.Role !== expectedRole
    ) {
      this.router.navigate(['login']); 
      return false;
    }
    return true;
  }

  public isAuthenticated(): boolean {
     return this.qurey.isLoggedIn;
  }

  getAuthStatus(){
    return this.isAuthenticated()
  }
}

