import { Entry } from "../core/Entry"

export type CompanyId = string

export interface CompanyData {
  name: string
}

export type Company = Entry<CompanyId, CompanyData>
