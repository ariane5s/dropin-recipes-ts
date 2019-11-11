import { Name } from "../../Formats/Names/Name"
import { FieldType } from "../../Context/Types/FieldType"

export interface Field<Type extends FieldType, Options = {}> {
  name: Name
  type: Type
  options?: Options
  min?: number
  max?: number
  required?: boolean
  filters?: boolean | string[]
}

export interface Field_LengthOptions {
  minLength?: number
  maxLength?: number
}

export interface Field_IdOption {
  id: string
}

export interface Field_DefaultOption<Type> {
  default?: Type
}
