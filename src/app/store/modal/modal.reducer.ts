import { createReducer, on } from "@ngrx/store"

import { ModalComponents } from "src/app/shared/components/modal/modal.component";
import { ModalActions } from "./modal.actions";


export namespace ModalReducer {

    export const MODAL = 'modal';


    export interface State {
        isModalOpen: boolean;
        modalComponent: ModalComponents | null;
        showSpinner: boolean;
    }


    const initialState: State = {
        isModalOpen: false,
        modalComponent: null,
        showSpinner: false,
    }


    export const reducer = createReducer(

        initialState,

        on(ModalActions.open, (state: State, action: any): State => {
            return {
                ...state,
                isModalOpen: true,
                modalComponent: action.modalComponent
            }
        }),

        on(ModalActions.close, (state: State): State => {
            return {
                ...state,
                isModalOpen: false,
                modalComponent: null
            }
        }),

        on(ModalActions.showSpinner, (state: State, action: any): State => {
            return {
                ...state,
                showSpinner: action.status
            }
        })

    );
}
