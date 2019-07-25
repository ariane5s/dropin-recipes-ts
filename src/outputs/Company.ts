import { Output } from "../core/Output"

export type CompanyId = string

export interface CompanyData {
  name: string
}

export type Company = Output<CompanyId> & CompanyData
