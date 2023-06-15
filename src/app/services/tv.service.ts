import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import apiConfig from '../api/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private http: HttpClient) {}
  // get tv deltail
  getTvApi(id: number): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}/tv/${id}`);
    return data;
  }
}
