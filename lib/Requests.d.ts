import { Document, DocumentParams } from "./outputs/Document";
import { RecipeId } from "./core/Recipe";
import { DocumentId } from "./outputs/Document";
import { Line } from "./outputs/Line";
import { CollectionId } from "./outputs/Collections";
export declare class Request {
    private static URL;
    private static VERSION;
    static enableLocalMode(port: number): void;
    private static request;
    static getLines<LineData = any>(recipe: RecipeId, collection: CollectionId, params?: DocumentParams): Promise<Line<LineData>[]>;
    static getOneLine<LineData = any>(recipe: RecipeId, collection: CollectionId, params?: DocumentParams): Promise<Line<LineData>>;
    static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Output>;
    static getDocumentLines(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Line[]>;
}
//# sourceMappingURL=Requests.d.ts.map