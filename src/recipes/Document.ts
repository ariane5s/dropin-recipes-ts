import { RecipeFormat } from "../core/RecipeFormat"
import { DocumentId } from "../outputs/Document"
import { CollectionSelector } from "../core/selectors/Collections"
import { Name } from "../core/i18n/Name"

export interface DocumentRecipe<Type = string, Options = any> extends RecipeFormat<Type, DocumentId> {
  options: Options
  lines: CollectionSelector[]
  name?: Name
}
