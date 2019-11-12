import { FieldType } from "../../Context/Types/FieldType"

export interface SchemaObject<Type extends string = FieldType, Options = {}> {
  type: Type
  options?: Options
}
