import { Field_LengthOptions, Field } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { SchemaObject } from "../../Formats/Objects/Schema"

export type NameFieldOptions = Field_LengthOptions & {
  person?: { fullName?: boolean, middleName?: boolean }
}

export type NameField = Field<FieldType.NAME, NameFieldOptions>

export type NameFieldSchema = SchemaObject<FieldType.NAME, NameFieldOptions>
