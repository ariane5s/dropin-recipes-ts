import { Field } from "../Field"

export type PhoneFieldOptions = {
  prefix?: number
}

export type PhoneField = Field<"phone", PhoneFieldOptions>
