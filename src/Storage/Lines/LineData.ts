import { CollectionId } from "../Collections/CollectionId"

export type LineData<Data> = {
  collection: CollectionId
} & Data
