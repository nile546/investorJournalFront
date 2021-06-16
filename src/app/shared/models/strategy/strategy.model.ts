import { InstrumentTypes } from "../instrument-types/instrument-types.model";


export class Strategy {
	public id: number | null | undefined;
	public name: string | null | undefined;
	public description: string | null | undefined;
	public userId: number | null | undefined;
	public instrumentType: InstrumentTypes | null | undefined;
	public createdAt: Date | null | undefined;
}