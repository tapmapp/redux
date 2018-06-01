import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store, ActionsSubject } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { SetPosts } from '../store/post/post.actions';
import { Post } from '../store/post/post.reducer';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  // GET POSTS
  async getPosts() {
    const posts = await this.fetchPosts();
    const defPosts = this.filterPost(posts);
    this.store.dispatch(new SetPosts(defPosts));
  }

  filterPost(posts): Post[] {
    return posts;
  }

  fetchPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
