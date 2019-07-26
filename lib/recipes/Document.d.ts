import { RecipeFormat } from "../core/RecipeFormat";
import { DocumentId } from "../outputs/Document";
import { CollectionSelectors } from "../core/CollectionsSelectors";
import { Name } from "../core/Name";
export interface DocumentRecipe<Type = string, Options = any> extends RecipeFormat<Type, DocumentId> {
    options: Options;
    lines: CollectionSelectors[];
    name?: Name;
}
//# sourceMappingURL=Document.d.ts.map