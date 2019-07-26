import { Field } from "../Field"

export type DateFieldOptions = {
  minDate?: Date
  maxDate?: Date
}

export type DateField = Field<DateFieldOptions>
