import { Name } from "../core/Name"
import { Recipe } from "../core/Recipe"
import { CollectionId } from "../outputs/Collections"

export interface CollectionRecipeField {
  name: Name
  sort: boolean
}

export type CollectionFields = { [id: string]: CollectionRecipeField }

export interface CollectionRecipe extends Recipe<"Collection", CollectionId> {
  fields?: CollectionFields
}
