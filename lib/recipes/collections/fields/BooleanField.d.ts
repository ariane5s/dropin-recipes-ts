import { Field, FieldDefaultOption, FieldType } from "../Field";
export declare type BooleanFieldOptions = FieldDefaultOption<boolean> & {
    done?: boolean;
};
export interface BooleanField extends Field<BooleanFieldOptions> {
    type: FieldType.BOOLEAN;
}
//# sourceMappingURL=BooleanField.d.ts.map