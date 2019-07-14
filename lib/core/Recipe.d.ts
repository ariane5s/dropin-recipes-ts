export declare type RecipeId = string;
export interface Recipe<Type, Id> {
    apiVersion: number;
    type: Type;
    id: Id;
}
