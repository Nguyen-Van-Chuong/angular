import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { Tv } from 'src/app/interfaces/tv.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() card!: any[];
  @Input() type: any;
}
