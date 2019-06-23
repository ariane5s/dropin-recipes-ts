import { RecipeId, DocumentId, CollectionId, Lines } from "./types";
export default class Recipes {
    private static API;
    static enableLocalMode(port?: number): void;
    private static request;
    static getDocument(recipe: RecipeId, document: DocumentId): Promise<any>;
    static getLines(recipe: RecipeId, collection: CollectionId, filters?: any): Promise<Lines>;
}
