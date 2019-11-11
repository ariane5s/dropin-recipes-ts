import { Name } from "../../Formats/Names/Name"
import { CompanyResponse } from "./api"
import { Company } from "./entity"
import { Validator } from "../../Code/Validator"

export type CompanyId = string

export interface CompanyData {
  name: Name
  administrators: string[]
}

export const CompanyValidator = (data: CompanyResponse|Company) => Validator<CompanyResponse|Company>(data, {
  name: { type: "name", options: { required: true } },
  administrators: { type: "array", options: { children: { type: "string" } } },
}, [ "validators", "company" ])

export interface CompanyRecipeData {
  name: Name
}

export const CompanyRecipeValidator = (data: CompanyRecipeData|Company) => Validator<CompanyResponse|Company>(data, {
  name: { type: "name", options: { required: true } },
}, [ "validators", "company" ])
