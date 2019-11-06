import { API, FetchMethod } from "../../Code/API"
import { Company } from "./Company"

export class CompaniesAPI {

  static getAll() {
    return API.request<Company[]>(FetchMethod.GET, `companies`)
  }

  static count() {}

  static getById<Output = Company>(company: CompanyId) {
    return API.request<Output>(FetchMethod.GET, `companies/${company}`)
  }

  static createCompany(name: Name, company: CompanyId, administrators: string[]) {
    return API.request<Company>(FetchMethod.PUT, "companies", {}, {
      name,
      slug: company,
      administrators
    })
  }

  static updateCompany(name: Name, company: CompanyId, administrators: string[]) {
    return API.request<Company>(FetchMethod.POST, `companies/${company}`, {}, {
      name,
      slug: company,
      administrators
    })
  }

  static deleteCompany(company: CompanyId) {
    return API.request<Company>(FetchMethod.DELETE, `companies/${company}`)
  }

}
