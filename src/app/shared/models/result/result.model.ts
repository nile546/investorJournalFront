export enum ResultStatuses {
    Ok = 1,
    Error,
}


export class Result {
    public status: ResultStatuses | undefined;
    public payload: any;
    public errorMessage: string | undefined;
}