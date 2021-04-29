import { Type } from "@angular/core";
import { Action, createReducer, on } from "@ngrx/store"
import { Modal } from "src/app/shared/components/abstract/modal/modal";


import { ModalActions } from "./modal.actions";

export namespace ModalReducer {

    export const MODAL = 'modal';


    export interface State {
        isModalOpen: boolean;
        modalComponent: Type<Modal> | null;
    }


    const initialState: State = {
        isModalOpen: false,
        modalComponent: null,
    }


    export const reducer = createReducer(

        initialState,

        on(ModalActions.open, (state: State, action: any) => {
            return {
                ...state,
                isModalOpen: true,
                modalComponent: action.modalComponent
            }
        }),

        on(ModalActions.close, (state: State) => ({
            ...state,
            isModalOpen: false,
            modalComponent: null
        }))

    );
}
