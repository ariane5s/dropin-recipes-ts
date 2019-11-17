import { FieldType } from "../../Context/Types/FieldType"

export interface SchemaObject<Type extends string = FieldType, Options = any> {
  type: Type
  options?: Options
}
