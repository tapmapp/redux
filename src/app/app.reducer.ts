import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer, } from './store/counter/counter.reducer';
import { PostState, postReducer, } from './store/post/post.reducer';
import { NomralModuleState, normalModuleReducer } from './normal/store/normal.reducer';

export interface AppState {
    counter: CounterState;
    post: PostState;
    normalModuleState: NomralModuleState;
}

export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    post: postReducer,
    normalModuleState: normalModuleReducer,
};


