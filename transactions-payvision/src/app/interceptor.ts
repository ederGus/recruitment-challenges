import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CexInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.clone({
      setHeaders: { 'Authorization': 'application/json' }
    });
    return next.handle(headers);
  }
}
