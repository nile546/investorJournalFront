import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer } from '../modules/auth/store/user/auth.reducer';

import { ModalReducer } from './modal/modal.reducer';


export interface State {
    [ModalReducer.MODAL]: ModalReducer.State,
    [AuthReducer.AUTH]: AuthReducer.State,
}


export const rootReducers: ActionReducerMap<State> = {
    [ModalReducer.MODAL]: ModalReducer.reducer,
    [AuthReducer.AUTH]: AuthReducer.reducer,
};