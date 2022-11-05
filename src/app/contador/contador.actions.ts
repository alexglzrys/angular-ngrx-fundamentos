import { createAction } from '@ngrx/store'

// 1. Declarar las acciones a despachar
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
