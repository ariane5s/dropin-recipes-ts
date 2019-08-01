import { Field, FieldLengthOptions, FieldType } from "../Field"

export type OccupationFieldOptions = FieldLengthOptions

export interface OccupationField extends Field<OccupationFieldOptions> {
  type: FieldType.OCCUPATION
}
