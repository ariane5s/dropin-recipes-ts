import { CollectionId } from "./Collections"

export type LineId = string

export interface Line {
  id: LineId
  collection: CollectionId
}
