import { ModelResponse } from "./Response"

export class ModelEntity<Id, Data> implements ModelResponse<Id> {
  id?: Id
  createdAt?: Date
  updatedAt?: Date
  archivedAt?: Date

  constructor(data: ModelResponse<Id, Data>) {
    if(typeof data.id !== "undefined") this.id = data.id
    if(typeof data.createdAt !== "undefined") this.createdAt = data.createdAt
    if(typeof data.updatedAt !== "undefined") this.updatedAt = data.updatedAt
    if(typeof data.archivedAt !== "undefined") this.archivedAt = data.archivedAt
  }
}
