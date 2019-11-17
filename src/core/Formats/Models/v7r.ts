import { SchemaObject } from "../Objects/Schema"
import { FieldType } from "../../Context/Types/FieldType"
import { TextFieldOptions, ListFieldOptions } from "../Fields"

type Objects = SchemaObject<FieldType.TEXT, TextFieldOptions>
  | SchemaObject<FieldType.LIST, ListFieldOptions>

export type v7rSchemaObjectByName = { [name: string]: Objects | v7rSchemaObjectByName }

export type v7rSchema = Objects | v7rSchemaObjectByName
