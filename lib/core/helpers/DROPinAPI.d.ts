import { Line, LineParams } from "../../outputs/Line";
import { User, UserId } from "../../outputs/User";
import { Token } from "../../outputs/Token";
import { CollectionId } from "../../outputs/Collections";
import { DocumentId, Document, DocumentParams } from "../../outputs/Document";
import { RecipeId, RecipeRecipe } from "../../recipes/Recipe";
import { NotificationId } from "../../outputs/Notification";
import { Company, CompanyId } from "../../outputs/Company";
export declare class DROPinAPI {
    private static URL;
    private static VERSION;
    private static TOKEN;
    static enableLocalMode(port: number): void;
    static setToken(token: string): void;
    private static fetch;
    private static request;
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
    static forgottenPasswordUpdate(email: string, hash: string, password: string): Promise<Token>;
    static validateEmail(email: string, hash: string): Promise<Token>;
    static getLines<Data>(recipe: RecipeId, collection: CollectionId, params?: LineParams): Promise<Line<Data>[]>;
    static getOneLine<Data>(recipe: RecipeId, collection: CollectionId, params?: LineParams): Promise<Line<Data>>;
    static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Output>;
    static getDocumentLines(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Line[]>;
    static getNotifications(user: UserId): Promise<Notification[]>;
    static setNotificationAsRead(user: UserId, notification: NotificationId, isRead: boolean): Promise<Notification[]>;
    static getCompanies(): Promise<Company[]>;
    static getCompany<Output = Company>(company: CompanyId): Promise<Output>;
    static createCompany(name: string, slug: string, administrators: string[]): Promise<Company>;
    static updateCompany(name: string, slug: string, administrators: string[]): Promise<Company>;
    static deleteCompany(slug: string): Promise<Company>;
    static createCollection(name: string, slug: string, fields: string[]): Promise<any>;
    static getRecipe<Output = RecipeRecipe>(recipe: RecipeId): Promise<Output>;
    static createRecipe(name: string, slug: string, company: string, authors: string[], administrators: string[]): Promise<RecipeRecipe>;
    static updateRecipe(name: string, slug: string, authors: string[], administrators: string[]): Promise<RecipeRecipe>;
    static deleteRecipe(slug: string): Promise<RecipeRecipe>;
}
//# sourceMappingURL=DROPinAPI.d.ts.map