import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ModalReducer } from "./modal.reducer";


export namespace ModalSelectors {
    export const modalState = createFeatureSelector<ModalReducer.State>(ModalReducer.MODAL);

    export const isModalOpen = createSelector(modalState, (state: ModalReducer.State) => state.isModalOpen);
}