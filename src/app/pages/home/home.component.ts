import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { delay } from 'rxjs';

import { MovieService } from '../../services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviePopular: Movie[] = [];
  movieTrending: Movie[] = [];
  loading: boolean = true;
  constructor(
    private service: MovieService,
    private spinner: NgxSpinnerService
  ) {
    // this.spinner.show();
  }
  ngOnInit(): void {
    this.showSpinner();
    this.getMovieData();
    this.getMovieTrendingData();
    // const h = setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }
  showSpinner() {
    this.loading = true;
    this.spinner.show();
  }
  // hideSpinner() {
  //   this.spinner.hide();
  // }

  // get movie data
  getMovieData() {
    this.service
      .getMovieApi(1, 'top_rated')
      .pipe(delay(2000))
      .subscribe((data) => {
        this.moviePopular = data.results.slice(0, 8);
        // this.hideSpinner();
        // this.checkLoading();
        this.loading = false;
        this.spinner.hide();
      });
  }
  // get movie trending
  getMovieTrendingData() {
    this.service
      .getTrendingApi('week')
      .pipe(delay(2000))
      .subscribe((data) => (this.movieTrending = data.results.slice(0, 8)));
    // this.hideSpinner();
    // this.checkLoading();
    this.loading = false;
    this.spinner.hide();
  }
  // checkLoading() {
  //   if (this.moviePopular.length > 0 && this.movieTrending.length > 0) {
  //     this.loading = false; // Tắt trạng thái loading nếu đã nhận đủ dữ liệu
  //     this.spinner.hide();
  //   }
  // }
}
