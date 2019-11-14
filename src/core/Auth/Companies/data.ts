import { Name } from "../../Formats/Names/Name"
import { CompanyResponse } from "./api"
import { Company } from "./entity"
import { v7r } from "../../Code/v7r"

export type CompanyId = string

export interface CompanyData {
  name: Name
  administrators: string[]
}

export const CompanyValidator = (data: CompanyResponse|Company) => v7r<CompanyResponse|Company>(data, {
  name: { type: "name", options: { required: true } },
  administrators: { type: "list", options: { children: { type: "string" } } },
}, [ "validators", "company" ])

export interface CompanyRecipeData {
  name: Name
}

export const CompanyRecipeValidator = (data: CompanyRecipeData|Company) => v7r<CompanyResponse|Company>(data, {
  name: { type: "name", options: { required: true } },
}, [ "validators", "company" ])
