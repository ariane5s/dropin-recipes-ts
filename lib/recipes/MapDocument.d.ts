import { LinesSelector } from "../core/selectors/CollectionSelector";
interface MapDataBounds {
    west: number;
    east: number;
    south: number;
    north: number;
}
interface GoogleMaps {
    apiKey: string;
    bounds: MapDataBounds;
    style: any;
}
interface MapDocumentDisplayField {
    name: string;
    options?: any;
}
export interface MapDocumentDisplay {
    name: string;
    fields: MapDocumentDisplayField[];
}
export interface MapDocument {
    googleMaps: GoogleMaps;
    lines: LinesSelector[];
}
export interface MapDocumentParams {
    linesOnly?: 1 | any;
    filters?: string;
    f?: string;
}
export {};
