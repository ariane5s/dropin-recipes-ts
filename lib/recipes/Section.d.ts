import { Name, RecipeType, Recipe } from "../core";
export declare type SectionId = string;
export interface ChildrenSection {
    name?: Name;
    children: SectionId[];
}
export declare type SectionRecipeList = {
    collection: string;
};
export declare enum SectionType {
    LIST = "List"
}
export interface SectionRecipe extends Recipe<SectionId> {
    type: RecipeType.SECTION;
    subtype: SectionType;
    name: Name;
    list: SectionRecipeList;
}
//# sourceMappingURL=Section.d.ts.map