import { ModelEntity } from "../../Formats/Models/Entity"
import { CompanyId, CompanyData, v7rCompany } from "./data"
import { Name } from "../../Formats/Names/Name"
import { ModelResponse } from "../../Formats/Models/Response"

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

  save() {}

  archive() {
  }

  unarchive() {}

  delete() {}

}
