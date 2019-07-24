import { Entry } from "../core/Entry"
import { RecipeId } from "../core/Recipe"
import { CollectionId } from "./Collections"

export type LineId = string

export interface LineParams {
  filters?: string
  f?: string
}

export interface Line<Data = any> extends Entry<LineId> {
  recipe: RecipeId
  collection: CollectionId
  data: Data
  version: number
}
