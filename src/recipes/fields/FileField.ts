import { Field } from "../Field"

export type FileFieldOptions = {
  formats?: string[]
  minSize?: number
  maxSize?: number
}

export type FileField = Field<"file", FileFieldOptions>
