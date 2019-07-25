import { DocumentRecipe } from "./Document"

export interface GoogleMapsDocumentBounds {
  west: number
  east: number
  south: number
  north: number
}

export interface GoogleMapsDocumentOptions {
  apiKey: string
  bounds: GoogleMapsDocumentBounds & any
  style: any[]
}

export type GoogleMapsDocument = DocumentRecipe<"GoogleMapsDocument", GoogleMapsDocumentOptions>
