import { Recipe } from "../../Catalog/Recipes"
import { DocumentId } from "../../API/Document"
import { CollectionSelector } from "../../Context/Collections"
import { Name } from "../../Formats/Names"

export enum DocumentType {
  GoogleMaps = "GoogleMapsDocument"
}

export interface DocumentRecipe<Options = any> extends Recipe<DocumentId, DocumentType> {
  options: Options
  lines: CollectionSelector[]
  name?: Name
}
