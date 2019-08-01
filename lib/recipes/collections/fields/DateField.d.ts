import { Field, FieldType } from "../Field";
export declare type DateFieldOptions = {
    minDate?: Date;
    maxDate?: Date;
    years?: boolean;
    months?: boolean;
    days?: boolean;
    hours?: boolean;
    minutes?: boolean;
    seconds?: boolean;
};
export interface DateField extends Field<DateFieldOptions> {
    type: FieldType.DATE;
}
//# sourceMappingURL=DateField.d.ts.map