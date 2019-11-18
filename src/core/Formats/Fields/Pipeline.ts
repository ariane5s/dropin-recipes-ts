import { Field, FieldIdOption, FieldType } from "../../.old/Formats/Field"

export type PipelineFieldOptions = FieldIdOption

export interface PipelineField extends Field<PipelineFieldOptions> {
  type: FieldType.PIPELINE
}