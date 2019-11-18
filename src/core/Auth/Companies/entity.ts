import { ModelEntity } from "../../Formats/Models/Entity"
import { CompanyId, CompanyData, v7rCompany } from "./data"
import { NameField } from "../../Formats/Fields"
import { ModelResponse } from "../../Formats/Models/Response"
import { CompaniesAPI } from "./api"

export class Company extends ModelEntity<CompanyId, CompanyData> implements CompanyData {
  name: NameField
  administrators: string[]

  constructor(data: ModelResponse<CompanyId, CompanyData>) {
    super(data)
    this.name = data.name
    this.administrators = data.administrators
  }

  getRecipes() {}

  getProjects() {}

  getGroups() {}

  getRevisions() {}

  validate() {
    return v7rCompany(this)
  }

  save() {
    if(typeof this.id !== "undefined") {
      return CompaniesAPI.update(this)
    }
    return CompaniesAPI.create(this)
  }

  archive(): Promise<any> {
    if(typeof this.id !== "undefined") {
      return CompaniesAPI.archive(this.id)
    }
    this.archivedAt = new Date()
    return Promise.resolve()
  }

  unarchive(): Promise<any> {
    if(typeof this.id !== "undefined") {
      return CompaniesAPI.unarchive(this.id)
    }
    if(typeof this.archivedAt !== "undefined") {
      delete this.archivedAt
    }
    return Promise.resolve()
  }

  delete(): Promise<any> {
    if(typeof this.id !== "undefined") {
      return CompaniesAPI.deleteById(this.id).then(result => {
        delete this.id
        return result
      })
    }
    return Promise.resolve()
  }

}
