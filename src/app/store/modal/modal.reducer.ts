import { Action } from "@ngrx/store";
import { createReducer, on } from "@ngrx/store"

import { ModalActions } from "./modal.actions";

export namespace ModalReducer {

    export const MODAL = 'modal';


    export interface State {
        isModalOpen: boolean;
    }


    const initialState: State = {
        isModalOpen: false,
    }


    export const reducer = createReducer(

        initialState,

        on(ModalActions.open, (state: State) => ({
            ...state,
            isModalOpen: true,
        })),

        on(ModalActions.close, (state: State) => ({
            ...state,
            isModalOpen: false,
        }))

    );
}
