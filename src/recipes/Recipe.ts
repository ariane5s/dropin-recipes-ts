import { Recipe, RecipeType } from "../core/types/Recipes"
import { Name } from "../core/i18n/Name"
import { CompanyId, CollectionId, DocumentId } from "../outputs"
import { SectionId, ChildrenSection } from "./Section"

export type RecipeId = string

export type RecipeRecipeVariables = { [name: string]: string | number }

export type RecipeRecipeSection = SectionId | ChildrenSection

export interface RecipeRecipe extends Recipe<RecipeId, RecipeType.RECIPE> {
  company: CompanyId
  name?: Name
  authors?: string[]
  administrators?: string[]
  variables?: RecipeRecipeVariables
  collections?: CollectionId[]
  documents?: DocumentId[]
  sections?: RecipeRecipeSection[]
}
