import { Name } from "../../Formats/Names/Name"

export type CompanyId = string

export interface CompanyRecipeData {
  name: Name
  administrators: string[]
}

export const CompanyValidator = () => {

}

export interface CompanyResponseData {
  name: Name
  administrators: string[]
}

export const CompanyRecipeValidator = () => {

}
