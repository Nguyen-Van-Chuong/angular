import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/services/movie.service';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private http: MovieService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  results: any;
  name: string = '';
  title: string = '';
  api = '';
  segment = '';

  ngOnInit(): void {
    const segments = this.route.snapshot.url;
    this.segment = segments[0].path;

    this.getMovieData(this.paginationConfig.currentPage);
  }

  loadingPage() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  getMovieData(page: number, type = 'popular') {
    this.loadingPage();
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

  ngOnDestroy(): void {
    // if (this.movieSubscription) {
    //   this.movieSubscription.unsubscribe();
    // }w
  }
}
