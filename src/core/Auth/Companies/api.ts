import { ModelResponse } from "../../Formats/Models/Responses"
import { CompanyId, CompanyData } from "./data"
import { Company } from "./entity"
import { API } from "../../Code/API"

export type CompanyResponse = ModelResponse<CompanyId, CompanyData>

export class CompaniesAPI {
  private static readonly PATH = "companies"

  static create(company: CompanyResponse|Company) {
    return API.create<CompanyId, CompanyData>(this.PATH, company)
  }

  static getById(id: CompanyId) {
    return API.getById<CompanyId, CompanyData>(this.PATH, id)
  }

  static getAll() {
    return API.get<CompanyId, CompanyData>(this.PATH)
  }

  static count(selector?: string) {
    return API.count(this.PATH, selector)
  }

  static update(company: CompanyResponse|Company) {
    return API.update<CompanyId, CompanyData>(this.PATH, company)
  }

  static archive(id: CompanyId) {
    return API.archive<CompanyId>(this.PATH, id)
  }

  static unarchive(id: CompanyId) {
    return API.unarchive<CompanyId>(this.PATH, id)
  }

  static deleteById(id: CompanyId) {
    return API.deleteById<CompanyId>(this.PATH, id)
  }
}
