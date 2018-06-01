import { Component, OnInit, OnDestroy } from '@angular/core';

// REDUX
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { AddNumber, LowNumber, Reset } from './store/counter/counter.actions';
import { Subscription } from 'rxjs/Subscription';

// SERVICES
import { PostService } from './services/posts-service.service';

// INTERFACES
import { Post } from './store/post/post.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  public number: number;
  public posts: Post[];
  private counterSub: Subscription;
  private postSub: Subscription;

  constructor(
    private postService: PostService,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.counterSub = this.store.select('counter').subscribe(counterState => {
      this.number = counterState.number;
    });

    this.postSub = this.store.select('post').subscribe(postsState => {
      this.posts = postsState.posts;
    });
  }

  // ADD NUMBER
  add() {
    this.store.dispatch(new AddNumber());
  }

  // ADD NUMBER
  low() {
    this.store.dispatch(new LowNumber());
  }

  // RESET COUNTER
  reset() {
    this.store.dispatch(new Reset());
  }

  bringPosts() {
    this.postService.getPosts();
  }

  ngOnDestroy () {
    this.counterSub.unsubscribe();
    this.postSub.unsubscribe();
  }

}
