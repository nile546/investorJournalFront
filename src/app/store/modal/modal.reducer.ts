import { Action } from "@ngrx/store";
import { createReducer, on } from "@ngrx/store"

import { ModalActions } from "./modal.actions";


export interface ModalState {
    isModalOpen: boolean;
}


const initialModalState: ModalState = {
    isModalOpen: false,
}


const _modalReducer = createReducer(

    initialModalState,

    on(ModalActions.show, (state: ModalState) => ({
        ...state,
        isModalOpen: true,
    })),

    on(ModalActions.hide, (state: ModalState) => ({
        ...state,
        isModalOpen: false,
    }))

);


export function modalReducer(state: ModalState | undefined, action: Action) {
    return _modalReducer(state, action);
}