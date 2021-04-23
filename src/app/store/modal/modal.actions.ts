import { createAction } from "@ngrx/store";

export namespace ModalActions {
    export const show = createAction('SHOW');
    export const hide = createAction('HIDE');
}

