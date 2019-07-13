import { CollectionId } from "./Collections";
export declare type LineId = string;
export interface Line<Data = any> {
    id: LineId;
    collection: CollectionId;
    data: Data;
}
