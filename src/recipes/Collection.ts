import { Name } from "../core/Name"
import { Recipe } from "../core/Recipe"
import { CollectionId } from "../outputs/Collections"

export type FieldType = "text" | "number" | "boolean"
  | "collection" | "pipeline" | "name" | "type"
  | "email" | "phone" | "occupation" | "image" | "percentage"
  | "currency" | "address" | "file" | "date" | "color" | "length"

export interface CollectionRecipeField {
  type: FieldType
  name?: Name
  sort?: boolean
}

export type CollectionRecipeFields = { [id: string]: CollectionRecipeField }

export interface CollectionRecipe extends Recipe<"Collection", CollectionId> {
  name?: Name
  fields?: CollectionRecipeFields
}
