import { ModelResponse } from "../../Formats/Models/ModelResponse"

export type CompanyId = string

export interface CompanyData {
  name: string
}

export type Company = ModelResponse<CompanyId, CompanyData>
