import { Recipe, RecipeType } from "../core/types/Recipes"
import { PermissionId } from "../outputs"
import { Name } from "../core"

export interface PermissionCollectionRecipe {
  create: any,
  retrieve: any,
  list: any,
  update: any,
  delete: any
}

export interface PermissionRecipe extends Recipe<PermissionId> {
  type: RecipeType.PERMISSION
  name: Name
  collections?:PermissionCollectionRecipe
}
