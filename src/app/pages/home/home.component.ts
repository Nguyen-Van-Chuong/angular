import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { delay } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviePopular: Movie[] = [];
  movieTrending: Movie[] = [];
  movieTrendingDay: Movie[] = [];
  constructor(private service: MovieService) {}
  ngOnInit(): void {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.service.getLoadingPage();
    this.getMovieData();
    this.getMovieTrendingData();
    this.getMovieTrendingDayData();
  }

  // get movie data
  getMovieData() {
    this.service
      .getTrendingApi('tv', 'day')
      .pipe(delay(2000))
      .subscribe((data) => {
        this.moviePopular = data.results.slice(0, 8);
      });
  }
  // get movie trending
  getMovieTrendingData() {
    this.service
      .getTrendingApi('movie', 'week')
      .pipe(delay(2000))
      .subscribe((data) => (this.movieTrending = data.results.slice(0, 8)));
  }
  // get movie trending
  getMovieTrendingDayData() {
    this.service
      .getTrendingApi('movie', 'day')
      .pipe(delay(2000))
      .subscribe((data) => (this.movieTrendingDay = data.results.slice(0, 8)));
  }
}
