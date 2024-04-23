import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Interceptor error:", error); // Afișează eroarea în consolă pentru diagnosticare

        if (error.status === 401) {
          console.log("Redirecting to login page");
          this.router.navigate(['/logare']);
        } else if (error.status === 403) {
          console.log("Redirecting to access denied page");
          this.router.navigate(['/access-denied']); // Redirecționează către pagina "Nu aveți acces" în caz de 403
        } else if (error.status === 500) {
          console.log("Redirecting to server error page");
          this.router.navigate(['/server_error']); // Redirecționează către pagina "Eroare la server" în caz de 500
        }

        throw(error); // Returnează eroarea pentru a fi tratată mai departe (de exemplu, în subscriberi)
      })
    );
  }
}
