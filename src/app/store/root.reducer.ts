import { ActionReducerMap } from '@ngrx/store';

import { AuthReducer } from '../modules/auth/store/user/auth.reducer';
import { DashboardReducer } from '../modules/dashboard/store/dashboard.reducer';
import { ModalReducer } from './modal/modal.reducer';


export interface State {
    [ModalReducer.MODAL]: ModalReducer.State,
    [AuthReducer.AUTH]: AuthReducer.State,
    [DashboardReducer.DASHBOARD]: DashboardReducer.State,
}


export const rootReducers: ActionReducerMap<State> = {
    [ModalReducer.MODAL]: ModalReducer.reducer,
    [AuthReducer.AUTH]: AuthReducer.reducer,
    [DashboardReducer.DASHBOARD]: DashboardReducer.reducer,
};