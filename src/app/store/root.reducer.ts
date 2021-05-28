import { ActionReducerMap } from '@ngrx/store';

import { UserReducer } from '../modules/user/store/user/user.reducer';
import { ModalReducer } from './modal/modal.reducer';


export interface State {
    [ModalReducer.MODAL]: ModalReducer.State,
    [UserReducer.USER]: UserReducer.State,
}


export const rootReducers: ActionReducerMap<State> = {
    [ModalReducer.MODAL]: ModalReducer.reducer,
    [UserReducer.USER]: UserReducer.reducer,
};