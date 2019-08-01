import { Recipe } from "./Recipes"
import { DocumentId } from "../../outputs/Document"
import { CollectionSelector } from "../selectors/Collections"
import { Name } from "../i18n/Name"

export enum DocumentType {
  GoogleMaps = "GoogleMapsDocument"
}

export interface DocumentRecipe<Options = any> extends Recipe<DocumentId, DocumentType> {
  options: Options
  lines: CollectionSelector[]
  name?: Name
}
