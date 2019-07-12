import { CollectionId } from "./Collections";
export declare type LineId = string;
export interface Line {
    id: LineId;
    collection: CollectionId;
}
