import { API } from "../../Context/API"

export class RecipesAPI {
  static getRecipe<Output = RecipeRecipe>(recipe: RecipeId) {
    return API.request<Output>(FetchMethod.GET, `recipes/${recipe}`)
  }

  static createRecipe(name: any, recipeId: RecipeId, company: string, administrators?: string[], authors?: string[]) {
    return API.request<RecipeRecipe>(FetchMethod.PUT, "recipes", {}, {
      name,
      slug: recipeId,
      company,
      authors,
      administrators
    })
  }

  static updateRecipe(name: any, recipeId: RecipeId, administrators?: string[], authors?: string[]) {
    return API.request<RecipeRecipe>(FetchMethod.POST, `recipes/${recipeId}`, {}, {
      name,
      slug: recipeId,
      authors,
      administrators
    })
  }

  static deleteRecipe(recipe: RecipeId) {
    return API.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}`)
  }
}
