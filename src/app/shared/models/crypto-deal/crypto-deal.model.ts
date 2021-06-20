import { Currencies } from "../currencies/currencies.model";
import { Pattern } from "../pattern/pattern.model";
import { Positions } from "../positions/positions.model";
import { Strategy } from "../strategy/strategy.model";
import { TimeFrames } from "../time-frames/time-frames.model";
import { Crypto } from "../crypto/crypto.model";


export class CryptoDeal {
    public id: number | null | undefined;
    public crypto: Crypto | null | undefined;
    public currency: Currencies | null | undefined;
    public strategy: Strategy | null | undefined;
    public pattern: Pattern | null | undefined;
    public position: Positions | null | undefined;
    public timeFrame: TimeFrames | null | undefined;
    public enterDatetime: Date | null | undefined;
    public enterPoint: number | null | undefined;
    public stopLoss: number | null | undefined;
    public quantity: number | null | undefined;
    public exitDatetime: Date | null | undefined;
    public exitPoint: number | null | undefined;
    public riskRatio: number | null | undefined;
    public result: number | null | undefined;
    public resultInPercent: number | null | undefined;
    public startDeposit: number | null | undefined;
    public endDeposit: number | null | undefined;
    public variability: boolean | null | undefined;
}