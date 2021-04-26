import { ActionReducerMap } from '@ngrx/store';

import { ModalReducer } from './modal/modal.reducer';


export interface State {
    [ModalReducer.MODAL]: ModalReducer.State,
}


export const rootReducers: ActionReducerMap<State> = {
    [ModalReducer.MODAL]: ModalReducer.reducer,
};