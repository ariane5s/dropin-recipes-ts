import { ModelEntity } from "../../Formats/Models/Entity"
import { CompanyId, CompanyData, v7rCompany } from "./data"
import { Name } from "../../Formats/Names/Name"
import { ModelResponse } from "../../Formats/Models/Response"
import { CompaniesAPI } from "./api"

export class Company extends ModelEntity<CompanyId, CompanyData> implements CompanyData {
  name: Name
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
    if(typeof this.id === "undefined") {
      return CompaniesAPI.create(this)
    }
    return CompaniesAPI.update(this)
  }

  archive() {
    return CompaniesAPI.archive(this.id)
  }

  unarchive() {}

  delete() {}

}
