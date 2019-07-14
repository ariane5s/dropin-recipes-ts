import { CollectionId } from "../recipes/Collections";
export declare type LineId = string;
export interface LineOutput<Data = any> {
    id: LineId;
    collection: CollectionId;
    data: Data;
}
