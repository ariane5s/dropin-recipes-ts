import { DocumentRecipe, DocumentType } from "../core/types/Documents";
export interface GoogleMapsDocumentBounds {
    west: number;
    east: number;
    south: number;
    north: number;
}
export interface GoogleMapsDocumentOptionsStyle {
    elementType?: any;
    stylers: {
        [property: string]: any;
    }[];
    featureType?: any;
}
export interface GoogleMapsDocumentOptions {
    apiKey: string;
    bounds: GoogleMapsDocumentBounds & any;
    style: GoogleMapsDocumentOptionsStyle[];
}
export declare type GoogleMapsDocument = DocumentRecipe<DocumentType.GoogleMaps, GoogleMapsDocumentOptions>;
//# sourceMappingURL=GoogleMapsDocument.d.ts.map