import { Field, FieldLengthOptions, FieldType } from "../Field";
export declare type NameFieldOptions = FieldLengthOptions & {
    fullName?: boolean;
};
export interface NameField extends Field<NameFieldOptions> {
    type: FieldType.NAME;
}
//# sourceMappingURL=NameField.d.ts.map