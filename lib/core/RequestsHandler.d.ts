import { RecipeId } from "../recipes/Recipe";
import { CollectionId } from "../outputs";
import { Line, LineParams } from "../outputs/Line";
export declare function RequestsHandler<Data>(recipe: RecipeId, collection: CollectionId): {
    getOne(params: LineParams): Promise<Line<Data>>;
};
//# sourceMappingURL=RequestsHandler.d.ts.map