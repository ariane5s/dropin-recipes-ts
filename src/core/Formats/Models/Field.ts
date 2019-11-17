import { Name } from "../../Formats/Names/Name"
import { FieldType } from "../../Context/Types/FieldType"

export interface ModelField<Type extends FieldType, Options = {}> {
  name: Name
  type: Type
  options?: Options
  filters?: boolean | string[]
}

export interface ModelField_MinMaxOptions {
  min?: number
  max?: number
}

export interface ModelField_LengthOptions {
  minLength?: number
  maxLength?: number
}

export interface ModelField_IdOption {
  id: string
}

export interface ModelField_DefaultOption<Type> {
  default?: Type
}

export interface ModelField_RequiredOption {
  required?: boolean
}
