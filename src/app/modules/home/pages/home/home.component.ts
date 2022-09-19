import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import dayjs from 'dayjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Post } from 'src/app/core/models/post.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  error: string | undefined;
  fetchingPosts: boolean = false;
  postsList: Post[] = [];
  loading: boolean = false;
  subscription: Subscription;
  constructor(private api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '672px',
      data: {
        loading: this.loading,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      if (data) {
        this.handleSubmit(data);
      }
    });
  }

  ngAfterContentInit() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.fetchingPosts = true;
    this.subscription = this.api.get('/posts').subscribe({
      next: (data: any) => {
        this.postsList = data.posts;
      },
      error: (error) => {
        this.error = 'Unable to fetch posts.';
        this.fetchingPosts = false;
      },
      complete: () => {
        this.fetchingPosts = false;
      },
    });
  };

  handleSubmit = async (data: any) => {
    this.error = '';
    this.loading = true;
    const values = data.value;
    this.subscription = this.api.post('/posts', values).subscribe({
      next: async (data: any) => {
        await this.fetchPosts();
      },
      error: () => {
        this.error = 'Unable to create post.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  };

  public toggleBookmark = async (postId: any) => {
    try {
      this.postsList = this.postsList.map((post) => {
        if (post.id === postId)
          return {
            ...post,
            bookmarked_at: !post.bookmarked_at ? dayjs().toISOString() : null,
          };
        else return post;
      });
      this.api.put(`/posts/${postId}/toggle-bookmark`).subscribe({
        error: (error) => {
          console.log(error);
        },
      });
    } catch (error) {
      this.error = 'Unable to bookmark';
    }
  };
}
