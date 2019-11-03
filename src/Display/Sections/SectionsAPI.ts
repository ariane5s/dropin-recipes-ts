
export class SectionsAPI {
  static getSection<Output = SectionRecipe>(recipe: RecipeId, section: SectionId) {
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}/sections/${section}`)
  }

  static createSection(recipe: RecipeId, section: SectionId, name: any, list: any) {
    return this.request<SectionRecipe>(FetchMethod.PUT, `recipes/${recipe}/sections`, {}, {
      name,
      slug: section,
      list
    })
  }

  static updateSection(recipe: RecipeId, section: SectionId, name: any, list: any) {
    return this.request<SectionRecipe>(FetchMethod.POST, `recipes/${recipe}/sections/${section}`, {}, {
      name,
      slug: section,
      list
    })
  }

  static deleteSection(recipe: RecipeId, section: SectionId) {
    return this.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}/sections/${section}`)
  }
}
