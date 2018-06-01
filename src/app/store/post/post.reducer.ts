import * as Actions from './post.actions';

export interface PostState {
    posts: Post[];
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const initialState: PostState = {
    posts: [],
};

export function postReducer(state = initialState, action: Actions.PostActions): PostState {
    switch (action.type) {
        case Actions.SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
            };
        }
        case Actions.UPDATE_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
            };
        }
        case Actions.DELETE_POSTS: {
            return {
                ...state,
                posts: [],
            };
        }
        default: return state;
    }
}


