import { ModelEntity } from "../../Formats/Models/Entity"
import { CompanyId, CompanyData } from "./data"
import { Name } from "../../Formats/Names/Name"
import { ModelResponse } from "../../Formats/Models/Responses"

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

  validate() {}

  save() {}

  remove() {}

  delete() {}

}
