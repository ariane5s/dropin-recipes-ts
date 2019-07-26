import { Name } from "../core"
import { Recipe } from "../core/Recipe"
import { GroupId } from "../outputs/Group"

export interface GroupCompaniesPermissions {
  billing?: boolean
  tokens?: boolean
  recipes?: boolean
  groups?: boolean
  delete?: boolean
}

export interface GroupLinesPermissions {
  get?: boolean
  put?: boolean
  post?: boolean
  delete?: boolean
  comment?: boolean
  history?: boolean
  restore?: boolean
  export?: boolean
  import?: boolean
}

export interface GroupPermissions {
  companies?: { [companyId: string]: GroupCompaniesPermissions }
  lines?: { [recipeId: string]: { [collectionId: string]: GroupLinesPermissions } }
}

export interface GroupData {
  name: Name
  permissions: GroupPermissions
}

export type GroupRecipe = Recipe<"Group", GroupId> & GroupData
