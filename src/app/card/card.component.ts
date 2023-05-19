import { Component, Input } from '@angular/core';
import { Students } from '../entities/students';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Students;
}
