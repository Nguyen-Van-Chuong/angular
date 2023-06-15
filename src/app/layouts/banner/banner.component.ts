import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() type: string = '';
  constructor(private http: MovieService) {}
  ngOnInit(): void {
    this.getTrendingData();
    this.getGenreData();
  }
  slides: Movie[] = [];
  genres: any[] = [];

  // get data trending
  getTrendingData() {
    this.http.getTrendingApi('movie', 'day').subscribe((data) => {
      this.slides = data.results.slice(0, 6);
    });
  }
  // get genre movie
  getGenreData() {
    this.http.getGenre('movie').subscribe((data) => {
      this.genres = data.genres;
    });
  }
  // get name
  getGenreName(genreId: number): string {
    const genre = this.genres.find((g) => g.id === genreId);
    return genre ? genre.name : '';
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
        },
      },
    ],
  };
}
