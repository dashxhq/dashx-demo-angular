import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent {
  error: string | undefined;
  fetchingBookmarks: boolean = false;
  bookmarksList: Post[] = [];
  loading: boolean = false;
  subscription: Subscription;
  constructor(private api: ApiService) {}

  fetchBookmarks = async () => {
    this.fetchingBookmarks = true;
    this.loading = true;
    this.subscription = this.api.get('/posts/bookmarked').subscribe({
      next: (data: any) => {
        this.bookmarksList = data.bookmarks;
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
      await this.api.put(`/posts/${postId}/toggle-bookmark`).subscribe();
    } catch (error) {
      this.error = 'Unable to bookmark';
    }
  };

  ngAfterContentInit() {
    this.fetchBookmarks();
  }
}
