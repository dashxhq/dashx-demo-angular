export interface Post {
  created_at: Date;
  bookmarked_at: any;
  text: string;
  user: {
    first_name: string;
    last_name: string;
  };
  id?: string;
}
