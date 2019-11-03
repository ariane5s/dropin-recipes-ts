
export class PermissionsAPI {
  static getPermission<Output = Permission>(recipe: RecipeId, permission: PermissionId) {
    return API.request<Output>(FetchMethod.GET, `recipes/${recipe}/permissions/${permission}`)
  }

  static createPermission(recipe: RecipeId, permission: PermissionId, name: Name, collections: any) {
    return API.request<Permission>(FetchMethod.PUT, `recipes/${recipe}/permissions`, {}, {
      name,
      slug: permission,
      collections
    })
  }

  static updatePermission(recipe: RecipeId, permission: PermissionId, name: Name, collections: any) {
    return API.request<Permission>(FetchMethod.POST, `recipes/${recipe}/permissions/${permission}`, {}, {
      name,
      slug: permission,
      collections
    })
  }

  static deletePermission(recipe: RecipeId, permission: PermissionId) {
    return API.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}/permissions/${permission}`)
  }
}
