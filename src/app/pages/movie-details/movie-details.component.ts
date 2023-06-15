import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  // @Input() products!: any;

  movie: any;
  similar: any[] = [];
  genres: any[] = [];
  reviews: any[] = [];
  casts: any[] = [];

  constructor(
    private http: MovieService,
    private tvService: TvService,
    private route: ActivatedRoute // private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.http.getLoadingPage();
    const segments = this.route.snapshot.pathFromRoot;

    let id = +this.route.snapshot.params['id'];
    if (segments[1].routeConfig?.path == 'movie') {
      this.getMovieDetailData(id);
      this.getGenreData();
      this.getReviewsData(id, 'movie');
      this.getCastData(id, 'movie');
      this.getSimilarData(id, 'movie');
    } else if (segments[1].routeConfig?.path == 'tv') {
      this.getTvDetailData(id);
      this.getGenreTvData();
      this.getReviewsData(id, 'tv');
      this.getCastData(id, 'tv');
      this.getSimilarData(id, 'tv');
    } else {
      this.getMovieDetailData(id);
      this.getGenreData();
      // this.getReviewsData(id);
    }
  }

  // get genre movie data
  getGenreData() {
    this.http
      .getGenre('movie')
      .pipe(delay(2000))
      .subscribe((data) => {
        this.genres = data.genres;
      });
  }
  getSimilarData(id: number, type: string) {
    this.http
      .getSimilar(id, type)
      .subscribe((data) => (this.similar = data.results.slice(0, 8)));
  }
  // get genre tv data
  getGenreTvData() {
    this.http
      .getGenre('tv')
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
    this.http.getMovieDetailApi(id, 'movie').subscribe((data) => {
      this.movie = data;
    });
  }
  //get tv deltail
  getTvDetailData(id: any) {
    this.tvService.getTvApi(id).subscribe((data) => {
      this.movie = data;
    });
  }
  // get reviews data
  getReviewsData(id: number, type: string) {
    this.http.getReviewsApi(id, type).subscribe((data) => {
      this.reviews = data.results.map((result: any) => ({
        ...result,
        showFullContent: false,
      }));
    });
  }
  // get cast
  getCastData(id: number, type: string) {
    this.http.getCast(id, type).subscribe((data) => {
      this.casts = data.cast;
      console.log(data.cast);
      console.log(this.casts);
    });
  }
}
