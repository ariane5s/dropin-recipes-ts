import { UserId } from "../../Auth/Users/UserId"
import { CompanyId } from "../../Auth/Companies/CompanyId"
import { RecipeId } from "../../Context/Recipes/RecipeId"

export interface ModelReference_Root<Id> {
  id: Id
}

export interface ModelReference_Owner {
  owner: UserId | CompanyId
}

export interface ModelReference_Recipe {
  recipe: RecipeId
}
