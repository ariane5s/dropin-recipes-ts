
export type Entity<Id, Data> = {
  id: Id
  createdAt: Date
  updatedAt: Date
  removedAt: null | Date
} & Data
