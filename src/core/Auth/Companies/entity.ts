import { ModelEntity } from "../../Formats/Models/Entities"
import { CompaniesAPI } from "./api"
import { CompanyId } from "./data"

export class Company implements ModelEntity<CompanyId> {

  getRecipes() {}

  getProjects() {}

  getGroups() {}

  getRevisions() {}

  validate() {}

  save(callback) {
    CompaniesAPI.create()
  }

  remove() {}

  delete() {}

}
