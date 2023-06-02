import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';
import apiConfig from '../api/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // get [popular top_rated upcoming] movie
  getMovieApi(movieType: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}movie/${movieType}`);
    return data;
  }
  // get trending list
  getTrendingApi(date: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}trending/movie/${date}`);
    return data;
  }
  // get genre list
  getGenreMovie(): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}genre/movie/list`);
    return data;
  }
  // get movie detail
  getMovieDetailApi(id: any): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}/movie/${id}`);
    return data;
  }
}
