import { Field } from "./Field"
import { Recipe, RecipeType } from "../core/types/Recipes"
import { CollectionId } from "../outputs/Collections"
import { Name } from "../core/i18n/Name"

export type CollectionRecipeFields = { [id: string]: Field }

export interface CollectionRecipe extends Recipe<CollectionId, RecipeType.COLLECTION> {
  name?: Name
  fields: CollectionRecipeFields
}
