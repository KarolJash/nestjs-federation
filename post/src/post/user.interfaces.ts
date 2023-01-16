import { Post } from './post.interfaces';

export interface User {
  id: number;
  posts?: Post[];
}
