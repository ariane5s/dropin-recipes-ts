import { Name, RecipeType, Recipe } from "../core"

export type SectionId = string

export interface ChildrenSection {
  name?: Name
  children: SectionId[]
}

export type SectionRecipeList = { 
  collection: string
}

export enum SectionType {
  LIST = "List",
}

export interface SectionRecipe extends Recipe<SectionId> {
  type: RecipeType.SECTION,
  subtype: SectionType,
  name: Name,
  list: SectionRecipeList,
}
