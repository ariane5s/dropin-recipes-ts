import { RecipeOutput } from "../../Formats/Line"

export type Id = string

export interface RecipeData {
  name: string
  company: any
  collections: any[]
  sections: any[]
  slug?: string
}

export const Recipe = RecipeFormat<"Recipe", RecipeId> & RecipeData
