import { Field, FieldLengthOptions, FieldType } from "../Field";
export declare type NumberFieldOptions = FieldLengthOptions & {
    decimals?: number;
};
export interface NumberField extends Field<NumberFieldOptions> {
    type: FieldType.NUMBER;
}
//# sourceMappingURL=NumberField.d.ts.map