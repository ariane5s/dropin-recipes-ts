import { API, FetchMethod } from "../../Code/API"
import { Company } from "./entity"
import { ModelAPI_Create, ModelAPI_Get } from "../../Formats/Models/API"
import { CompanyId } from "./data"
import { CompanyResponse } from "./response"

type Model  = ModelAPI_Create<CompanyId, CompanyResponse>
            & ModelAPI_Get<CompanyId, CompanyResponse>

export const CompaniesAPI: Model = {

  create: company => API.request<Company>(FetchMethod.PUT, "companies", {}, company),

  getById: companyId => API.request<CompanyResponse>(FetchMethod.GET, `companies/${companyId}`),

  /*getAll() {
    return API.request<Company[]>(FetchMethod.GET, `companies`)
  }

  static describe() {}

  static 

  static updateCompany(name: Name, company: CompanyId, administrators: string[]) {
    return API.request<Company>(FetchMethod.POST, `companies/${company}`, {}, {
      name,
      slug: company,
      administrators
    })
  }

  static deleteCompany(company: CompanyId) {
    return API.request<Company>(FetchMethod.DELETE, `companies/${company}`)
  }*/

}
