import { Line } from "../../Formats/Line"

export type CompanyId = string

export interface CompanyData {
  name: string
}

export type Company = Line<CompanyId> & CompanyData
