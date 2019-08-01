import { RecipeOutput } from "../core/types/Outputs"

export type CompanyId = string

export interface CompanyData {
  name: string
}

export type Company = RecipeOutput<"Company", CompanyId> & CompanyData
