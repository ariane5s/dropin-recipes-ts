import { Field, FieldLengthOptions, FieldType } from "../Field";
export declare type CurrencyFieldOptions = FieldLengthOptions & {
    symbol: string;
};
export interface CurrencyField extends Field<CurrencyFieldOptions> {
    type: FieldType.CURRENCY;
}
//# sourceMappingURL=CurrencyField.d.ts.map