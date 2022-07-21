import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  // const [postsList, setPostsList] = useState([])
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [error, setError] = useState('')
  // const [fetchingPosts, setFetchingPosts] = useState(false)
  // const [loading, setLoading] = useState(false)
  error: string | undefined;
  fetchingPosts: boolean = false;
  postsList: Post[] = [];
  subscription: Subscription;
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

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
}
