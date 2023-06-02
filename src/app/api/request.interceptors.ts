import { Injectable } from '@angular/core';
import apiConfig from './config';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Thực hiện các thay đổi trên yêu cầu tại đây
    // Ví dụ: Thêm tiêu đề, thay đổi URL, vv.
    const modifiedRequest = request.clone({
      // Thêm tiêu đề xác thực
      setHeaders: {
        Authorization: 'Bearer ' + apiConfig.token,
      },
      // Thay đổi URL (nếu cần)
      // url: `${apiConfig.baseUrl}` + request.url,
    });

    return next.handle(modifiedRequest);
  }
}
