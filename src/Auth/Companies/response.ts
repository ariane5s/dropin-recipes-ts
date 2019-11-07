import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { CompanyId } from "./id"

export interface CompanyResponseData {
  name: string
  administrators: string[]
}

export type CompanyResponse = ModelResponse<CompanyId, CompanyResponseData>
