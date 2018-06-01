import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Router, PreloadAllModules } from '@angular/router';

// REDUX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { environment } from '../environments/environment.prod';

import { PostService } from './services/posts-service.service';
import { NormalComponent } from './normal/normal.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([{
        path: 'module',
        loadChildren: './lazy/redux.module#ReduxModule',
      }]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
