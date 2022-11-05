import { Action } from '@ngrx/store';
import { decrementar, incrementar } from './contador.actions';

// 2. Declarar el reducer
export function contadorReducer(state: number = 10, action: Action) {
  switch(action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    default:
      return state;
  }
}
