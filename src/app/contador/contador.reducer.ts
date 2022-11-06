import { Action, createReducer, on } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from './contador.actions';

// 2. Declarar el reducer - estilo clásico
/*export function contadorReducer(state: number = 10, action: Action) {
  switch(action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    default:
      return state;
  }
}*/

// 2. Declarar el reducer - estilo NgRx
export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  // Extraer la carga util para realizar la tarea
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero ),
  on(reset, (state) => initialState)
);
