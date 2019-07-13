export declare type RecipeId = string;
export interface Recipe<Type> {
    apiVersion: number;
    recipe: RecipeId;
    type: Type;
    id: RecipeId;
    name: string;
}
