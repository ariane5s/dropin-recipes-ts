import { Recipe } from "../core/Recipe"
import { DocumentId } from "../outputs/Document"
import { CollectionSelectors } from "../core/CollectionsSelectors"
import { Name } from "../core/Name"

export interface DocumentRecipe<Type = any, Options = any> extends Recipe<Type, DocumentId> {
  options: Options
  lines: CollectionSelectors[]
  name?: Name
}

export enum DocumentType {
  GoogleMaps = "GoogleMapsDocument"
}
