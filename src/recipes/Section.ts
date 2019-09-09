import { Name, RecipeType, Recipe } from "../core"

export type SectionId = string

export interface ChildrenSection {
  name?: Name
  children: SectionId[]
}

export type SectionRecipeList = { 
  collection: string
}

export interface SectionRecipe extends Recipe<SectionId> {
  type: RecipeType.SECTION,
  name: Name,
  list: SectionRecipeList,
}
