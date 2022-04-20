import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(  
    public auth: AuthService, 
    public router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.auth.canActivate(route, state)
    }
}
