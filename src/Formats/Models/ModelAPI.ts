import { RevisionsAPI_Model } from "../../Catalog/Revisions/RevisionsAPI"

export type ModelAPI_Create<Entity, Output> = {
  create: (entity: Entity) => Output
  createMany: (entities: Entity[]) => Output[]
}

export type ModelAPI_Read<Id, Selector, Output> = {
  getById: (id: Id) => Output
  get: (selector: Selector) => Output[]
  count: (selector: Selector) => number
}

export type ModelAPI_Update<Id, Selector, Output> = {
  delete: (selector: Selector) => Output
  deleteById: (id: Id) => Output
}

export type ModelAPI_Delete<Id, Selector, Output> = {
  delete: (selector: Selector) => Output
  deleteById: (id: Id) => Output
}
