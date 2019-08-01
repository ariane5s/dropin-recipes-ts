import { Field, FieldType } from "../Field";
export declare type DurationFieldOptions = {
    minDuration?: Date;
    maxDuration?: Date;
    years?: boolean;
    months?: boolean;
    weeks?: boolean;
    days?: boolean;
    hours?: boolean;
    minutes?: boolean;
    seconds?: boolean;
};
export interface DurationField extends Field<DurationFieldOptions> {
    type: FieldType.DURATION;
}
//# sourceMappingURL=DurationField.d.ts.map