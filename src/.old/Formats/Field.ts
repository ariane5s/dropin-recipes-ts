import { Name } from "./Name"

export interface Field<Options = {}> {
  name: Name
  type: FieldType
  options?: Options
  min?: number
  max?: number
  required?: boolean
  filters?: boolean | string[]
}

export interface FieldLengthOptions {
  minLength?: number
  maxLength?: number
}

export interface FieldIdOption {
  id: string
}

export interface FieldDefaultOption<Type> {
  default?: Type
}
