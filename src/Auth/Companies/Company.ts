import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { CompanyId } from "./CompanyId"
import { ResponseType } from "../../Context"
import { CompanyData } from "./CompanyData"

export type Company = ModelResponse<CompanyId, ResponseType.COMPANY, CompanyData>
