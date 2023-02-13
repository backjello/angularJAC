import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router, private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err)=>{
        const message = 'invalid token'
        const key = 'message'
        if (err.status == 401 || ( err.status == 500 && err.error[key] == message )){
          this.tokenService.setToken('')
          this.router.navigate(['/login'
            , { error: 'Devi essere loggato per accedere a questa funzione' }])
        }
        throw err
      })
    )
  }
}
