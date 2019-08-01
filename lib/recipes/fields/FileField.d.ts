import { Field, FieldType } from "../Field";
export declare type FileFieldOptions = {
    formats?: string[];
    minSize?: number;
    maxSize?: number;
};
export interface FileField extends Field<FileFieldOptions> {
    type: FieldType.FILE;
}
//# sourceMappingURL=FileField.d.ts.map