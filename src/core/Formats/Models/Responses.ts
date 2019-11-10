
export type ModelResponse<Id, Data = any> = {
  id?: Id
  createdAt?: Date
  updatedAt?: Date
  archivedAt?: Date
} & Data
