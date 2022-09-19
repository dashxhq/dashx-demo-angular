import { AfterContentInit, Component } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements AfterContentInit {
  error: string | undefined;
  fetchingBookmarks: boolean = false;
  bookmarksList: Post[] = [];
  loading: boolean = false;
  constructor(private api: ApiService) {}

  async fetchBookmarks() {
    this.fetchingBookmarks = true;
    this.loading = true;
    this.api.get('/posts/bookmarked').subscribe({
      next: (data: any) => {
        this.bookmarksList = data.posts;
      },
      error: (error) => {
        this.error = 'Unable to fetch bookmarks.';
        this.fetchingBookmarks = false;
        this.loading = false;
      },
      complete: () => {
        this.fetchingBookmarks = false;
        this.loading = false;
      },
    });
  };

  toggleBookmark = async (postId: any) => {
    try {
      this.bookmarksList.map((bookmark) => bookmark.id !== postId);
      this.api.put(`/posts/${postId}/toggle-bookmark`).subscribe({
        error: (error) => {
          console.log(error);
        },
      });
    } catch (error) {
      this.error = 'Unable to bookmark';
    }
  };

  ngAfterContentInit() {
    this.fetchBookmarks();
  }
}
