export declare enum RecipeType {
    COLLECTION = "Collection",
    COMPANY = "Company",
    GROUP = "Group",
    RECIPE = "Recipe"
}
export interface Recipe<Id, Type = RecipeType> {
    apiVersion: number;
    type: Type;
    id: Id;
}
//# sourceMappingURL=Recipes.d.ts.map