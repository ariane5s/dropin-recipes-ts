import { Field } from "../Field"

export type EmailFieldOptions = {
  domains?: string[]
}

export type EmailField = Field<"email", EmailFieldOptions>
