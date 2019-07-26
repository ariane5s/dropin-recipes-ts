import { Field } from "../Field"

export type DurationFieldOptions = {
  minDuration?: Date
  maxDuration?: Date
  years?: boolean
  months?: boolean
  weeks?: boolean
  days?: boolean
  hours?: boolean
  minutes?: boolean
  seconds?: boolean
}

export type DurationField = Field<DurationFieldOptions>
