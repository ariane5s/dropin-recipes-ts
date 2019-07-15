import { DocumentRecipe, DocumentType } from "./Document";
export interface MapDocumentGoogleMapsBounds {
    west: number;
    east: number;
    south: number;
    north: number;
}
export interface MapDocumentGoogleMapsOptions {
    apiKey: string;
    bounds: MapDocumentGoogleMapsBounds & any;
    style: any[];
}
export declare type MapDocumentGoogleMaps = DocumentRecipe<DocumentType.GoogleMaps, MapDocumentGoogleMapsOptions>;
//# sourceMappingURL=MapDocumentGoogleMaps.d.ts.map