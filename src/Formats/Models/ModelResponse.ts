import { ResponseType } from "../../Context"

export type ModelResponse<Id, Type extends ResponseType, Data> = {
  id: Id
  type: Type
  createdAt: Date
  updatedAt: Date
  removedAt: Date
} & Data
