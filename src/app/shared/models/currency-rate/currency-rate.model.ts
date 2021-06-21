import { Currencies } from "../currencies/currencies.model"


export class CurrencyRate {
    public first_currency: Currencies | undefined;
    public second_currency: Currencies | undefined;
    public ratio: string | undefined;
}