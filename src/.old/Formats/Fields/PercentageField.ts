import { Field, FieldLengthOptions, FieldType } from "../Field"

export type PercentageFieldOptions = FieldLengthOptions

export interface PercentageField extends Field<PercentageFieldOptions> {
  type: FieldType.PERCENTAGE
}
