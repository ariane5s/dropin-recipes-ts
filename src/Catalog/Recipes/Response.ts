import { RecipeOutput } from "../../Outputs/Outputs"

namespace Catalog.Recipes {

  export type Id = string

  export interface RecipeData {
    name: string
    company: any
    collections: any[]
    sections: any[]
    slug?: string
  }

  export type CatalogRecipesResponse = RecipeOutput<"Recipe", RecipeId> & RecipeData

}
