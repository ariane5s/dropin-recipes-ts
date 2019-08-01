import { DocumentRecipe } from "../Document"

export interface GoogleMapsDocumentBounds {
  west: number
  east: number
  south: number
  north: number
}

export interface GoogleMapsDocumentOptionsStyle {
  elementType?: any
  stylers: { [property: string]: any }[]
  featureType?: any
}

export interface GoogleMapsDocumentOptions {
  apiKey: string
  bounds: GoogleMapsDocumentBounds & any
  style: GoogleMapsDocumentOptionsStyle[]
}

export type GoogleMapsDocument = DocumentRecipe<"GoogleMapsDocument", GoogleMapsDocumentOptions>
