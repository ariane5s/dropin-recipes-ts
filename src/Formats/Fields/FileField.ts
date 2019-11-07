import { Field, FieldType } from "../../.old/Formats/Field"

export type FileFieldOptions = {
  formats?: string[]
  minSize?: number
  maxSize?: number
}

export interface FileField extends Field<FileFieldOptions> {
  type: FieldType.FILE
}
