import { Action } from '@ngrx/store';

export const ADD_NUMBER = 'ADD_NUMBER';
export const LOW_NUMBER = 'LOW_NUMBER';
export const RESET = 'RESET';

export class AddNumber implements Action {
    readonly type = ADD_NUMBER;
}

export class LowNumber implements Action {
    readonly type = LOW_NUMBER;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type CounterActions = AddNumber | LowNumber | Reset;
