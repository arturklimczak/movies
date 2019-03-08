import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { CacheManagerService } from '../services/cache-manager.service';


@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {
  constructor (private cacheManager: CacheManagerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (this.cacheManager.has(req.url)) {
      console.log('From Cache: ' + req.url);
      return of( this.cacheManager.get(req.url));
    }
    return next.handle(req)
      .pipe(
        filter((evt) => evt instanceof HttpResponse),
        tap((response) => {
          console.log('From Server: ' + req.url);
          this.cacheManager.set(req.url, response);
        })
      );
  }
}
