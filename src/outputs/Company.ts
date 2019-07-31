import { RecipeOutput } from "../core/Output"

export type CompanyId = string

export interface CompanyData {
  name: string
  slug: string
}

export type Company = RecipeOutput<"Company", CompanyId> & CompanyData
