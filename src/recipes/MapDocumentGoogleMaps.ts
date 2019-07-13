import { Document, DocumentType } from "./Document"

export interface MapDocumentGoogleMapsBounds {
  west: number
  east: number
  south: number
  north: number
}

export interface MapDocumentGoogleMapsOptions {
  apiKey: string
  bounds: MapDocumentGoogleMapsBounds & any
  style: any[]
}

export type MapDocumentGoogleMaps = Document<DocumentType.GoogleMaps, MapDocumentGoogleMapsOptions>
