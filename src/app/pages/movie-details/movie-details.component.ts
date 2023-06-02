import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() products!: any;

  product: any;
  constructor(private http: MovieService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let id = +this.route.snapshot.params['id'];
    this.getMovieDetailData(id);
    // this.product = this.products.find((p) => p.id === id);
  }

  getMovieDetailData(id: any) {
    this.http.getMovieDetailApi(id).subscribe((data) => {
      this.product = data;
    });
  }
}
