
export type RecipeId = string

export interface Recipe<Type, Id> {
  apiVersion: number
  revision: number
  type: Type
  id: Id
}
