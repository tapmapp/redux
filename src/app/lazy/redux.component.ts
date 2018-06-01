import { Component, OnInit } from '@angular/core';
import { FeatureState } from './store/redux-reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {

  constructor(private store: Store<FeatureState>) { }

  ngOnInit() {
  }

}
