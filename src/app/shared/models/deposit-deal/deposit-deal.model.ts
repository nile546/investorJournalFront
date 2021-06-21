import { Bank } from "../bank/bank.model";
import { Currencies } from "../currencies/currencies.model";

export class DepositDeal {
    public id: number | null | undefined;
    public bank: Bank | null | undefined;
    public currency: Currencies | null | undefined;
    public enterDatetime: Date | null | undefined;
    public percent: number | null | undefined;
    public exitDatetime: Date | null | undefined;
    public startDeposit: number | null | undefined;
    public endDeposit: number | null | undefined;
    public result: number | null | undefined;
}