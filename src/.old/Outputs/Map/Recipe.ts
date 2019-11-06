import { DocumentRecipe, DocumentType } from "../../Storage/Documents/DocumentRecipe"

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

export interface GoogleMapsDocument extends DocumentRecipe<GoogleMapsDocumentOptions> {
  type: DocumentType.GoogleMaps,
}
