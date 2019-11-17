import { Field } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { SchemaObject } from "../Objects/Schema"

export type ListFieldOptions = {
  todo?: boolean
  children?: ListField
}

export type ListField = Field<FieldType.LIST, ListFieldOptions>

export type ListFieldSchema = SchemaObject<FieldType.LIST, ListFieldOptions>
