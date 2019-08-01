import { Field, FieldLengthOptions, FieldType } from "../Field";
export declare type LengthFieldOptions = FieldLengthOptions & {
    unit: string;
};
export interface LengthField extends Field<LengthFieldOptions> {
    type: FieldType.LENGTH;
}
//# sourceMappingURL=LengthField.d.ts.map