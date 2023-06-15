import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';
import apiConfig from '../api/config';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  private type: string = 'movie';
  setApiUrl(url: string) {
    this.type = url;
  }
  // get [popular top_rated upcoming] movie
  getMovieApi(page: number, movieType: string): Observable<any> {
    const data = this.http.get(
      `${apiConfig.baseUrl}${this.type}/${movieType}?page=${page}`
    );
    return data;
  }
  // get trending list
  getTrendingApi(type: string, date: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}trending/${type}/${date}`);
    return data;
  }
  // get genre list
  getGenre(type: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}genre/${type}/list`);
    return data;
  }
  // get movie detail
  getMovieDetailApi(id: any, type: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}/${type}/${id}`);
    return data;
  }
  // get reviews
  getReviewsApi(id: number, type: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}${type}/${id}/reviews`);
    return data;
  }
  // get image api original
  getImageOriginal(url: string): Observable<any> {
    const data = this.http.get(`${apiConfig.originalImage}${url}`);
    return data;
  }
  // genres
  getGenreType(id: number, type: string) {
    const data = this.http.get(
      `${apiConfig.baseUrl}discover/${type}?with_genres=${id}`
    );
    return data;
  }
  // casts
  getCast(id: number, type: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}${type}/${id}/credits`);
    return data;
  }
  //similar
  getSimilar(id: number, type: string): Observable<any> {
    const data = this.http.get(`${apiConfig.baseUrl}${type}/${id}/similar`);
    return data;
  }

  // search
  getSearchApi(id: number, type: string, query: string): Observable<any> {
    const data = this.http.get(
      `${apiConfig.baseUrl}search/${type}?query=${query}&language=en-US&page=${id}`
    );
    return data;
  }
  // loadding page
  getLoadingPage() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
