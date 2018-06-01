import { AppState } from '../../app.reducer';

export interface FeatureState extends AppState {
    reduxModuleState: ReduxModuleState;
}

export interface ReduxModuleState {
    users: User[];
}

export interface User {
    id: number;
    name: string;
}

const initialState: ReduxModuleState = {
    users: []
};

export function reduxModuleReducer(state = initialState) {
    return {...state};
}

