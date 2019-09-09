import { RecipeOutput } from "../core/types/Outputs"

export type RecipeId = string

export interface RecipeData {
  name: string
  company: any
  collections: any[]
  sections: any[]
  slug?: string
}

export type Recipe = RecipeOutput<"Recipe", RecipeId> & RecipeData
