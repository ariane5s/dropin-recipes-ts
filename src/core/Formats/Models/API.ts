
export type ModelAPI_Create<Entity, Response> = {
  create: (data: Entity|Entity[]) => Promise<Response>
}

export type ModelAPI_Get<Id, Entity> = {
  getById: (id: Id) => Promise<Entity>
}

export type ModelAPI_Get_Selector<Selector, Entity> = {
  get: (selector: Selector) => Entity[]
}

export type ModelAPI_Update<Entity, Response> = {
  update: (data: Entity|Entity[]) => Response
}

export type ModelAPI_Delete<Id, Response> = {
  delete: (id: Id) => Response
}

export type ModelAPI_Delete_Selector<Selector, Response> = {
  delete: (selector: Selector) => Response
}
