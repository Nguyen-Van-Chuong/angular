import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild('contentReview') contentReview: any;

  @Input() reviews: any[] = [];
  // content: string = '';
  receiveData(data: string) {
    this.reviews = [...this.reviews, data];
  }
  //
  getDate(date: string) {
    const time = new Date(date);
    const fomatteDateString = time.toDateString();
    return fomatteDateString;
  }
  getTime(date: string) {
    const time = new Date(date);
    const fomatteDateString = time.toLocaleString();
    return fomatteDateString;
  }
}
