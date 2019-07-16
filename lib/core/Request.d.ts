import { Line } from "../outputs/Line";
import { User } from "../outputs/User";
import { Token } from "../outputs/Token";
import { RecipeId } from "./Recipe";
import { CollectionId } from "../outputs/Collections";
import { DocumentId, Document, DocumentParams } from "../outputs/Document";
export declare class Request {
    private static URL;
    private static VERSION;
    private static TOKEN;
    static enableLocalMode(port: number): void;
    static setToken(token: string): void;
    private static fetch;
    static register(invitationCode: string, email: string, password: string): Promise<{
        user: User;
    }>;
    static login(email: string, password: string): Promise<{
        user: User;
        token: Token;
    }>;
    static forgottenPassword(email: string, hash?: string): Promise<{
        success: boolean;
    }>;
    static forgottenPasswordUpdate(email: string, hash: string, password: string): Promise<{
        token: Token;
    }>;
    static validateEmail(email: string, hash: string): Promise<{
        token: Token;
    }>;
    static getLines<Data = any>(recipe: RecipeId, collection: CollectionId, params?: DocumentParams): Promise<Line<Data>[]>;
    static getOneLine<Data = any>(recipe: RecipeId, collection: CollectionId, params?: DocumentParams): Promise<Line<Data>>;
    static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Output>;
    static getDocumentLines(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Line[]>;
}
//# sourceMappingURL=Request.d.ts.map