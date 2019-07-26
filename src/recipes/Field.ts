import { Name } from "../core/Name"

export interface Field<Options = {}> {
  name: Name
  type: string
  options?: Options
  min?: number
  max?: number
  required?: boolean
  filters?: boolean | string[]
}

export type FieldType = "boolean" | "collection" | "color"
  | "currency" | "date" | "duration" | "email" | "file"
  | "length" | "list" | "name" | "notification" | "number"
  | "occupation" | "percentage" | "phone" | "pipeline" | "text" | "type"

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
