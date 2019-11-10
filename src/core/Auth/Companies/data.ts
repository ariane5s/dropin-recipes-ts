import { Name } from "../../Formats/Names/Name"

export type CompanyId = string

export interface CompanyData {
  name: Name
  administrators: string[]
}

export const CompanyValidator = () => {

}

export interface CompanyRecipeData {
}

export const CompanyRecipeValidator = () => {
}
