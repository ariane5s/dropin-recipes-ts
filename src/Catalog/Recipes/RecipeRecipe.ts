import { Recipe, RecipeType } from "."
import { Name } from "../../Formats/Name"
import { CompanyId, CollectionId, DocumentId } from "../API/Responses"
import { SectionId, ChildrenSection } from "../../Display/Section"

export type RecipeId = string

export type RecipeRecipeVariables = { [name: string]: string | number }

export type RecipeRecipeSection = SectionId | ChildrenSection

export interface RecipeRecipe extends Recipe<RecipeId> {
  type: RecipeType.RECIPE
  company: CompanyId
  name?: Name
  authors?: string[]
  administrators?: string[]
  variables?: RecipeRecipeVariables
  collections?: CollectionId[]
  documents?: DocumentId[]
  sections?: RecipeRecipeSection[]
}
