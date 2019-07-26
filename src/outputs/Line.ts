import { Output } from "../core/Output"
import { RecipeId } from "../recipes/Recipe"
import { CollectionId } from "./Collections"

export type LineId = string

export interface LineParams {
  filters?: string
  f?: string
}

export type Line<Data = any> = Output<LineId> & {
  recipe: RecipeId
  collection: CollectionId
  data: Data
  version: number
}
