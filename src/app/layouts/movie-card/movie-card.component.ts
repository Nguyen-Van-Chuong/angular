import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieCards: any;
  @Input() totalPages: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // @Output()
}
