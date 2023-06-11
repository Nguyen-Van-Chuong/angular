import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category-nav-bar',
  templateUrl: './category-nav-bar.component.html',
  styleUrls: ['./category-nav-bar.component.css'],
})
export class CategoryNavBarComponent {
  constructor(private router: Router, private http: MovieService) {}
  apiUrl!: string;
  navigateToMovieList(category: string) {
    if (category === 'movies') {
      this.http.setApiUrl('movie');
      this.router.navigate(['/movie-list']);
    } else if (category === 'tv-series') {
      this.http.setApiUrl('tv');
      this.router.navigate(['/tv-list']);
    }
  }
}
