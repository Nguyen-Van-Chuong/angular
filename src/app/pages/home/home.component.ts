import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviePopular: Movie[] = [];
  movieTrending: Movie[] = [];
  constructor(private service: MovieService) {}
  ngOnInit(): void {
    this.getMovieData();
    this.getMovieTrendingData();
  }

  getMovieData() {
    this.service.getMovieApi('popular').subscribe((data) => {
      this.moviePopular = data.results.slice(0, 8);
      // console.log(this.moviePopular);
    });
  }
  // get movie trending
  getMovieTrendingData() {
    this.service
      .getTrendingApi('week')
      .subscribe((data) => (this.movieTrending = data.results.slice(0, 8)));
  }
}
