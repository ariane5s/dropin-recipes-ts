import { ModelResponse } from "./Responses"
import { Name } from "../Names/Name"

export class ModelEntity<Id, Data> implements ModelResponse<Id> {
  id?: Id
  createdAt?: Date
  updatedAt?: Date
  archivedAt?: Date

  constructor(data: ModelResponse<Id, Data>) {
    this.id = data.id
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.archivedAt = data.archivedAt
  }
}
