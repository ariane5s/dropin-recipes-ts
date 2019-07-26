import { Field } from "../Field"

export type DateFieldOptions = {
  minDate?: Date
  maxDate?: Date
  years?: boolean
  months?: boolean
  days?: boolean
  hours?: boolean
  minutes?: boolean
  seconds?: boolean
}

export type DateField = Field<"date", DateFieldOptions>
