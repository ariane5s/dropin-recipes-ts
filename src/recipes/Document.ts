import { Recipe } from "../core/Recipe"
import { DocumentId } from "../outputs/Document"
import { CollectionSelectors } from "../core/CollectionsSelectors"
import { Name } from "../core/Name"

export enum DocumentType {
  GoogleMaps = "GoogleMapsDocument"
}

export interface DocumentRecipe<Options = any> extends Recipe<DocumentType, DocumentId> {
  options: Options
  lines: CollectionSelectors[]
  name?: Name
}
