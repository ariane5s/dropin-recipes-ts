import { RecipeOutput } from "../core/types/Outputs"

export type PermissionId = string

export interface PermissionData {
  name: string
  slug?: string
  collections: any
}

export type Permission = RecipeOutput<"Permission", PermissionId> & PermissionData