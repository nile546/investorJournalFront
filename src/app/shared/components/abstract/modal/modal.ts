import { ChangeDetectorRef, Directive } from "@angular/core";
import { Observable } from "rxjs";

@Directive()
export abstract class Modal {

    public loading: Observable<boolean> | undefined;

    constructor(
        
    ) {

    }

}