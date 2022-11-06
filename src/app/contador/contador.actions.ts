import { createAction, props } from '@ngrx/store'

// 1. Declarar las acciones a despachar
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
// Esta acción espera un objeto como payload
export const multiplicar = createAction('[Contador] Multiplicar', props<{numero: number}>());
export const dividir = createAction('[Contador] Dividir', props<{numero: number}>());
