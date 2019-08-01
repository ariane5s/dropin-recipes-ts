import { Field, FieldLengthOptions, FieldType } from "../Field";
export declare type TextFieldOptions = FieldLengthOptions & {
    lines?: number;
};
export interface TextField extends Field<TextFieldOptions> {
    type: FieldType.TEXT;
}
//# sourceMappingURL=TextField.d.ts.map