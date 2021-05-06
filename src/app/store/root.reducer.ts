import { ActionReducerMap } from '@ngrx/store';

import { ModalReducer } from './modal/modal.reducer';
import { UserReducer } from './user/user.reducer';


export interface State {
    [ModalReducer.MODAL]: ModalReducer.State,
    [UserReducer.CURRENT_USER]: UserReducer.State,
}


export const rootReducers: ActionReducerMap<State> = {
    [ModalReducer.MODAL]: ModalReducer.reducer,
    [UserReducer.CURRENT_USER]: UserReducer.reducer,
};