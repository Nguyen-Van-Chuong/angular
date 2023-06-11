import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Output() Comment = new EventEmitter<any>();
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}

  commentForm = new FormGroup({
    content: new FormControl(''),
  });

  postComment() {
    const contentControl = this.commentForm.get('content');

    const data = {
      author: 'Goddard',
      author_details: {
        name: '',
        username: 'Goddard',
        avatar_path: null,
        rating: null,
      },
      content: contentControl?.value,
      created_at: '2018-06-09T17:51:53.359Z',
      id: '5b1c13b9c3a36848f2026384',
      updated_at: '2021-06-23T15:58:09.421Z',
      url: 'https://www.themoviedb.org/review/5b1c13b9c3a36848f2026384',
    };
    this.Comment.emit(data);

    this.commentForm.reset();
  }
}
