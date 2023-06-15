import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category-nav-bar',
  templateUrl: './category-nav-bar.component.html',
  styleUrls: ['./category-nav-bar.component.css'],
})
export class CategoryNavBarComponent {
  constructor(private router: Router, private http: MovieService) {}
  apiUrl!: string;
  genresMovie: any[] = [];
  genresTv: any[] = [];
  ngOnInit(): void {
    this.getGenreMovieData();
    this.getGenreTvData();
  }
  navigateToMovieList(category: string) {
    if (category === 'movies') {
      this.http.setApiUrl('movie');
      this.router.navigate(['movie/movie-list']);
    } else if (category === 'tv-series') {
      this.http.setApiUrl('tv');
      this.router.navigate(['tv/tv-list']);
    }
  }

  goToTypeMovie(id: number) {
    // this.http.getGenreType(id, 'movie').subscribe((data) => console.log(data));
    this.router.navigate(['type/' + id]);
  }
  goToTypeTv() {}
  //
  getGenreMovieData() {
    this.http
      .getGenre('movie')
      .pipe(delay(2000))
      .subscribe((data) => {
        this.genresMovie = data.genres;
      });
  }
  //
  getGenreTvData() {
    this.http
      .getGenre('tv')
      .pipe(delay(2000))
      .subscribe((data) => {
        this.genresTv = data.genres;
      });
  }
}
