import { Company } from "./entity"
import { API } from "../../Code/API"
import { CompanyId } from "./data"

export const CompaniesAPI = {

  create: (company: Company) => API.create<Company>("companies", company),

  getById: (companyId: CompanyId) => API.getById<Company, CompanyId>("companies", companyId),

}
