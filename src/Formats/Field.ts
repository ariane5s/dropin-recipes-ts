import { Name } from "./Names"

export enum FieldType {
  BOOLEAN = "boolean",
  COLLECTION = "collection",
  COLOR = "color",
  CURRENCY = "currency",
  DATE = "date",
  DURATION = "duration",
  EMAIL = "email",
  FILE = "file",
  LENGTH = "length",
  LIST = "list",
  NAME = "name",
  NUMBER = "number",
  OCCUPATION = "occupation",
  PERCENTAGE = "percentage",
  PHONE = "phone",
  PIPELINE = "pipeline",
  TEXT = "text",
  TYPE = "type",
  URL = "url",
}

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
