export enum ResultStatuses {
    Ok = 1,
    Error,
}


export class Result {
    public status: ResultStatuses | undefined;
    public payload?: unknown;
    public errorMessage?: string | undefined | null;
}