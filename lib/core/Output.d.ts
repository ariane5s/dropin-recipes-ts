export interface Output<Id> {
    id: Id;
    createdAt: Date;
    updatedAt: Date;
}
export interface RecipeOutput<Type, Id> extends Output<Id> {
    type: Type;
}
//# sourceMappingURL=Output.d.ts.map