import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


export class LogoutGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    // si mon token true il va retourner true sinon il retourne false
    if (token) {
      return false;
    } else {
      return true;
    }
  }
}
