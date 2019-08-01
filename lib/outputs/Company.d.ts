import { RecipeOutput } from "../core/types/Outputs";
export declare type CompanyId = string;
export interface CompanyData {
    name: string;
    slug?: string;
}
export declare type Company = RecipeOutput<"Company", CompanyId> & CompanyData;
//# sourceMappingURL=Company.d.ts.map