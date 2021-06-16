import { InstrumentTypes } from "../instrument-types/instrument-types.model";

export class Pattern {
    public id: number | null | undefined;
	public name: string | null | undefined;
	public description: string | null | undefined;
	public icon: string | null | undefined;
	public instrumentType: InstrumentTypes | null | undefined;
	public createdAt: Date | null | undefined;
}