import { Action } from '@ngrx/store';

// INTERFACES
import { Post } from './post.reducer';


// ACTIONS //

// SET POSTS
export const SET_POSTS = 'SET_POSTS';

export class SetPosts implements Action {
    readonly type = SET_POSTS;
    constructor(public payload: Post[]) {}
}

// UPDATE POSTS
export const UPDATE_POSTS = 'UPDATE_POSTS';

export class UpdatePosts implements Action {
    readonly type = UPDATE_POSTS;
    constructor(public payload: Post[]) {}
}

// DELETE POSTS
export const DELETE_POSTS = 'DELETE_POSTS';

export class DeletePosts implements Action {
    readonly type = DELETE_POSTS;
}

export type PostActions = SetPosts | UpdatePosts | DeletePosts;
