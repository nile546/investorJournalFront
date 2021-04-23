import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ModalState } from "./modal.reducer";


export namespace ModalSelectors {
    export const modalState = createFeatureSelector<ModalState>('modal');
    export const isModalOpen = createSelector(modalState, (state: ModalState) => state.isModalOpen);
}