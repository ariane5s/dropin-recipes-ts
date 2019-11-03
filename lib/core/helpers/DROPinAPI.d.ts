import { Line, LineParams, LineId } from "../../outputs/Line";
import { User, UserId } from "../../outputs/User";
import { Token } from "../../outputs/Token";
import { CollectionId } from "../../outputs/Collections";
import { DocumentId, Document, DocumentParams } from "../../outputs/Document";
import { RecipeId, RecipeRecipe } from "../../recipes/Recipe";
import { NotificationId } from "../../outputs/Notification";
import { Company, CompanyId } from "../../outputs/Company";
import { Notification } from "../../outputs/Notification";
import { CollectionRecipe, SectionRecipe, SectionId } from "../../recipes";
import { Recipe } from "../../outputs/Recipe";
import { PermissionId, Permission } from "../../outputs";
import { Name } from "../strings";
declare enum FetchMethod {
    PUT = "PUT",
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
declare type FetchParams = {
    [name: string]: string;
};
export declare class DROPinAPI {
    private static URL;
    private static VERSION;
    private static TOKEN;
    static enableLocalMode(port?: number, address?: string, https?: boolean): void;
    static setToken(token: string): void;
    private static fetch;
    static request<Output>(method: FetchMethod, path: string, params?: FetchParams, body?: any): Promise<Output>;
    static register(invitationCode: string, email: string, password: string, realm?: string): Promise<{
        user: User;
    }>;
    static login(email: string, password: string, realm?: string): Promise<{
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
    static createLine(recipe: RecipeId, collection: CollectionId, data: any, version: number): Promise<CollectionRecipe>;
    static updateLine(line: LineId, data: any): Promise<Line<any>>;
    static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Output>;
    static getDocumentLines(recipe: RecipeId, document: DocumentId, params?: DocumentParams): Promise<Line[]>;
    static getNotifications(user: UserId): Promise<Notification[]>;
    static setNotificationAsRead(user: UserId, notification: NotificationId, isRead: boolean): Promise<Notification[]>;
    static getCompanies(): Promise<Company[]>;
    static getCompaniesAndRecipes(user: UserId): Promise<Recipe[]>;
    static getCompany<Output = Company>(company: CompanyId): Promise<Output>;
    static createCompany(name: Name, company: CompanyId, administrators: string[]): Promise<Company>;
    static updateCompany(name: Name, company: CompanyId, administrators: string[]): Promise<Company>;
    static deleteCompany(company: CompanyId): Promise<Company>;
    static getCollection<Output = CollectionRecipe>(recipe: RecipeId, collection: CollectionId): Promise<Output>;
    static createCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any): Promise<CollectionRecipe>;
    static updateCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any): Promise<CollectionRecipe>;
    static deleteCollection(recipe: RecipeId, collection: CollectionId): Promise<RecipeRecipe>;
    static getRecipe<Output = RecipeRecipe>(recipe: RecipeId): Promise<Output>;
    static createRecipe(name: any, recipeId: RecipeId, company: string, administrators?: string[], authors?: string[]): Promise<RecipeRecipe>;
    static updateRecipe(name: any, recipeId: RecipeId, administrators?: string[], authors?: string[]): Promise<RecipeRecipe>;
    static deleteRecipe(recipe: RecipeId): Promise<RecipeRecipe>;
    static getSection<Output = SectionRecipe>(recipe: RecipeId, section: SectionId): Promise<Output>;
    static createSection(recipe: RecipeId, section: SectionId, name: any, list: any): Promise<SectionRecipe>;
    static updateSection(recipe: RecipeId, section: SectionId, name: any, list: any): Promise<SectionRecipe>;
    static deleteSection(recipe: RecipeId, section: SectionId): Promise<RecipeRecipe>;
    static getPermission<Output = Permission>(recipe: RecipeId, permission: PermissionId): Promise<Output>;
    static createPermission(recipe: RecipeId, permission: PermissionId, name: Name, collections: any): Promise<Permission>;
    static updatePermission(recipe: RecipeId, permission: PermissionId, name: Name, collections: any): Promise<Permission>;
    static deletePermission(recipe: RecipeId, permission: PermissionId): Promise<RecipeRecipe>;
}
export {};
//# sourceMappingURL=DROPinAPI.d.ts.map