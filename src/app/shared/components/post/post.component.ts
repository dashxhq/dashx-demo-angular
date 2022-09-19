import { Component, EventEmitter, Input, Output } from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: Post;
  @Output() onBookmarkToggle: EventEmitter<any> = new EventEmitter();

  published: any;
  constructor() {
    dayjs.extend(relativeTime);
    this.published = dayjs(this.post?.created_at).fromNow();
  }

  bookmarkClick = (id: any) => {
    this.onBookmarkToggle.emit(id);
  };
}
