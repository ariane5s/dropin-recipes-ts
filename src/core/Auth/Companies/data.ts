import { NameField } from "../../Formats/Fields"
import { CompanyResponse } from "./api"
import { Company } from "./entity"
import { v7r } from "../../Code/v7r"
import { CompanyRecipe } from "./recipe"

export type CompanyId = string

export interface CompanyData {
  name: NameField
  administrators: string[]
}

export const v7rCompany = (data: CompanyResponse|Company) => v7r<CompanyResponse|Company>(data, {
  name: { type: "name", options: { required: true } },
  administrators: { type: "list", options: {} },
}, [ "v7r", "company", "entity" ])

export interface CompanyRecipeData {
  name: NameField
}

export const v7rCompanyRecipe = (data: CompanyRecipeData|CompanyRecipe) => v7r<CompanyRecipeData|CompanyRecipe>(data, {
  name: { type: "name", options: { required: true } },
}, [ "v7r", "company", "recipe" ])
