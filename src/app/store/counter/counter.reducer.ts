import * as Actions from './counter.actions';

export interface CounterState {
    number: number;
}

const initialState: CounterState = {
    number: 0,
};

export function counterReducer(state = initialState, action: Actions.CounterActions): CounterState {
    switch (action.type) {
        case Actions.ADD_NUMBER: {
            return {
                ...state,
                number: state.number + 1,
            };
        }
        case Actions.LOW_NUMBER: {
            return {
                ...state,
                number: state.number - 1,
            };
        }
        case Actions.RESET: {
            return {
                ...state,
                number: 0,
            };
        }
        default: return state;
    }
}


