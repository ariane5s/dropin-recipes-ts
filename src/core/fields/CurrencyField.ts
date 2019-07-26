import { Field, FieldLengthOptions } from "../Field"

export type CurrencyFieldOptions = FieldLengthOptions & {
  symbol: string
}

export type CurrencyField = Field<CurrencyFieldOptions>
