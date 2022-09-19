import { Component, Input } from '@angular/core';
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
  @Input() toggleBookmark: (args: any) => void;
  published: any;
  constructor() {
    dayjs.extend(relativeTime);
    this.published = dayjs(this.post?.created_at).fromNow();
  }

  bookmarkClick = (id: any) => {
    this.toggleBookmark(id);
  };
}
