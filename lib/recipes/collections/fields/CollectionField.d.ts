import { FieldDefaultOption, FieldIdOption, Field, FieldType } from "../Field";
export declare type CollectionFieldOptions = FieldDefaultOption<boolean> & FieldIdOption;
export interface CollectionField extends Field<CollectionFieldOptions> {
    type: FieldType.COLLECTION;
}
//# sourceMappingURL=CollectionField.d.ts.map