import { LineParams, Line } from "./Line";
export declare type DocumentId = string;
export interface DocumentParams extends LineParams {
    linesOnly?: 1 | "1";
    t?: string;
}
export interface Document<Options = any> {
    type: DocumentType;
    options: Options;
    lines: Line[];
}
//# sourceMappingURL=Document.d.ts.map