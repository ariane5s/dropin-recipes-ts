import { Output } from "../core/Output"
import { RecipeId } from "../core/Recipe"
import { CollectionId } from "./Collections"

export type LineId = string

export interface LineParams {
  filters?: string
  f?: string
}

export interface Line<Data = any> extends Output<LineId, "Line"> {
  recipe: RecipeId
  collection: CollectionId
  data: Data
  version: number
}
