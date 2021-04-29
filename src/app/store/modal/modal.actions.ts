import { createAction, props } from "@ngrx/store";
import { Modal } from "src/app/shared/components/abstract/modal/modal";

export namespace ModalActions {
    export const open = createAction('[Modal Component] Open', props<{ modalComponent: Modal }>());
    export const close = createAction('[Modal Component] Close');
}

