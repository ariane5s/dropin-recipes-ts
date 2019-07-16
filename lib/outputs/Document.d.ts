import { LineParams, Line } from "./Line";
import { DocumentType } from "../recipes/Document";
export declare type DocumentId = string;
export interface DocumentParams extends LineParams {
    linesOnly?: "1" | string;
    token?: string;
    t?: string;
}
export interface Document<Options = any> {
    type: DocumentType;
    options: Options;
    lines: Line[];
}
//# sourceMappingURL=Document.d.ts.map