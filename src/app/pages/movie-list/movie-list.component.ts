import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  // Khai báo biến chứa thông tin phân trang
  paginationConfig: PaginationInstance = {
    itemsPerPage: 20, // Số phần tử hiển thị trên mỗi trang
    currentPage: 1, // Trang hiện tại
    totalItems: 0, // Tổng số phần tử
    id: 'custom-pagination',
  };
  constructor(private http: MovieService, private route: ActivatedRoute) {}
  activeButton: string = '';
  results: Movie[] = [];
  name: string = '';
  title: string = '';
  api = '';
  segment: any;

  ngOnInit(): void {
    this.http.getLoadingPage();
    const segments: ActivatedRouteSnapshot[] = this.route.snapshot.pathFromRoot;
    this.segment = segments[1].routeConfig?.path;
    this.getMovieData(this.paginationConfig.currentPage);
  }

  getMovieData(page: number, type = 'popular') {
    this.activeButton = type;
    this.http.getLoadingPage();
    this.name = type;
    this.http
      .getMovieApi(page, type)
      .pipe(delay(1000))
      .subscribe((data) => {
        this.results = data.results;
        this.paginationConfig.totalItems = data.total_results;
      });
  }
  onPageChange(page: number): void {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.paginationConfig.currentPage = page;
    this.getMovieData(page, this.name);
  }

  ngOnDestroy(): void {}
}
