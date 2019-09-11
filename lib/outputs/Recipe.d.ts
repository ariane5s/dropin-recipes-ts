import { RecipeOutput } from "../core/types/Outputs";
export declare type RecipeId = string;
export interface RecipeData {
    name: string;
    company: any;
    collections: any[];
    sections: any[];
    slug?: string;
}
export declare type Recipe = RecipeOutput<"Recipe", RecipeId> & RecipeData;
//# sourceMappingURL=Recipe.d.ts.map