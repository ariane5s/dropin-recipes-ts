import { Line, LineParams } from "../../outputs/Line";
import { User, UserId } from "../../outputs/User";
import { Token } from "../../outputs/Token";
import { CollectionId } from "../../outputs/Collections";
import { DocumentId, Document, DocumentParams } from "../../outputs/Document";
import { RecipeId } from "../../recipes/Recipe";
import { NotificationId } from "../../outputs/Notification";
import { Company } from "../../outputs/Company";
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
}
//# sourceMappingURL=DROPinAPI.d.ts.map