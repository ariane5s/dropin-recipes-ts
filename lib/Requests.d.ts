import { DocumentOutput, DocumentParams } from "./outputs/Document";
import { RecipeId } from "./core/Recipe";
import { DocumentId } from "./recipes/Document";
import { LineOutput } from "./outputs/Line";
export declare class Request {
    private static URL;
    private static VERSION;
    static enableLocalMode(port: number): void;
    private static request;
    static getDocument<Output = DocumentOutput>(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Output>;
    static getDocumentLines(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<LineOutput[]>;
}
//# sourceMappingURL=Requests.d.ts.map