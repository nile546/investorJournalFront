import { createAction, props } from "@ngrx/store";

import { ModalComponents } from "src/app/shared/components/modal/modal.component";


export namespace ModalActions {
    export const open = createAction('[Modal Component] Open', props<{ modalComponent: ModalComponents }>());
    export const close = createAction('[Modal Component] Close');
}

