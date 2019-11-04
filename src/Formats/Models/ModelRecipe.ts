
export enum RecipeType {
  COLLECTION = "Collection",
  COMPANY = "Company",
  GROUP = "Group",
  RECIPE = "Recipe",
  SECTION = "Section",
  PERMISSION = "Permission"
}

export type ModelRecipe<Type extends RecipeType, Id, Data> = {
  apiVersion: number
  type: Type
  id: Id
} & Data
