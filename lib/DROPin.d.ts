import { RecipeId } from "./types/Recipe";
import { DocumentId } from "./types/Document";
import { CollectionId } from "./types/Collections";
import { Line } from "./types/Line";
export declare class DROPin {
    private static API;
    static enableLocalMode(port: number): void;
    private static request;
    static getDocument(recipe: RecipeId, document: DocumentId): Promise<any>;
    static getLines(recipe: RecipeId, collection: CollectionId, filters?: any): Promise<Line[]>;
}
