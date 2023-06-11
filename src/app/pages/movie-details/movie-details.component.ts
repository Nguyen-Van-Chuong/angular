import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() products!: any;

  product: any;
  genres: any[] = [];
  reviews: any[] = [];

  constructor(
    private http: MovieService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    const segments = this.route.snapshot.url;
    let id = +this.route.snapshot.params['id'];
    if (segments[0].path == 'movie-list') {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getMovieDetailData(id);
      this.getGenreData();
      this.getReviewsData(id);
    } else {
      this.getTvDetailData(id);
    }
  }
  // get genre movie data
  getGenreData() {
    this.http
      .getGenreMovie()
      .pipe(delay(2000))
      .subscribe((data) => {
        this.genres = data.genres;
      });
  }
  // get name data
  getGenreName(genreId: number): string {
    const genre = this.genres.find((g) => g.id === genreId);
    return genre ? genre.name : '';
  }
  // get detail data
  getMovieDetailData(id: any) {
    this.http.getMovieDetailApi(id).subscribe((data) => {
      this.product = data;
    });
  }
  //get tv deltail
  getTvDetailData(id: any) {
    this.http.getTvApi(id).subscribe((data) => {
      this.product = data;
    });
  }
  // get reviews data
  getReviewsData(id: number) {
    this.http.getReviewsApi(id).subscribe((data) => {
      this.reviews = data.results.map((result: any) => ({
        ...result,
        showFullContent: false,
      }));
    });
  }
}
