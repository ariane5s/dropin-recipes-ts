import { Field, FieldLengthOptions, FieldType } from "../Field"

export type CurrencyFieldOptions = FieldLengthOptions & {
  symbol: string
}

export interface CurrencyField extends Field<CurrencyFieldOptions> {
  type: FieldType.CURRENCY
}
