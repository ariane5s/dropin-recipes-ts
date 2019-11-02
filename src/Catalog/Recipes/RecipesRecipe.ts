
export enum RecipeType {
  COLLECTION = "Collection",
  COMPANY = "Company",
  GROUP = "Group",
  RECIPE = "Recipe",
  SECTION = "Section",
}

export interface Recipe<Id, Type = RecipeType> {
  apiVersion: number
  type: Type
  id: Id
}
