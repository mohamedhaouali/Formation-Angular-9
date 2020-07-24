import {HTTP_INTERCEPTORS, HttpParams, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // recuperer mon token
    const token = localStorage.getItem('token');
    if (token) {
      const keys = req.params.keys();
      let params = new HttpParams();
      for (let index = 0 ; index < keys.length; index++) {
        params = params.append(keys[index], req.params.get(keys[index]));
      }
      // injecter les parametre
      params = params.append('access_token', token);
      // creer un clone de notre requete
      const cloneReq = req.clone(
        {params}
      );
      return next.handle(cloneReq);
      // si il n'y a pas du token
    } else {
      return next.handle(req);
    }
  }
}

export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
};
