import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private http: MovieService) {}
  paginationConfig: PaginationInstance = {
    itemsPerPage: 20, // Số phần tử hiển thị trên mỗi trang
    currentPage: 1, // Trang hiện tại
    totalItems: 0, // Tổng số phần tử
    id: 'custom-pagination',
  };
  page = 1;

  results: any;
  key: any;
  search = new FormGroup({
    title: new FormControl(''),
  });
  ngOnInit(): void {}
  onSubmit() {
    this.key = this.search.value.title;
    this.getMovieData('movie', this.key);
  }
  getMovieData(type: string, name: string) {
    this.http.getSearchApi(this.page, type, name).subscribe((data) => {
      this.results = data.results;
    });
    this.http.getLoadingPage();
  }
  // onPageChange(page: number): void {
  //   document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   this.paginationConfig.currentPage = page;
  //   this.getMovieData(page, this.name);
  // }
}
