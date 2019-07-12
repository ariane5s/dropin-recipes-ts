import { CollectionId } from "../recipes/Collections"

export type LineId = string

export interface LineOutput<Data = any> {
  id: LineId
  collection: CollectionId
  data: Data
}
