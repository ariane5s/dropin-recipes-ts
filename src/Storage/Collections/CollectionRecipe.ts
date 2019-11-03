import { Field } from "../../Formats/Field"
import { Recipe, RecipeType } from "../../Catalog/Recipes"
import { CollectionId } from "../API/Collections"
import { Name } from "../../Formats/Names"

export type CollectionRecipeFields = { [id: string]: Field }

export interface CollectionRecipe extends Recipe<CollectionId> {
  type: RecipeType.COLLECTION
  name?: Name
  fields: CollectionRecipeFields
}
