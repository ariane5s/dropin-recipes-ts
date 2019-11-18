import * as Fields from "../Fields"

type FieldObjects = Fields.AudioFieldSchema | Fields.BooleanFieldSchema | Fields.CollectionFieldSchema
  | Fields.ColorFieldSchema | Fields.DateFieldSchema | Fields.EmailFieldSchema | Fields.EnvironmentFieldSchema
  | Fields.FileFieldSchema | Fields.ImageFieldSchema | Fields.LanguageFieldSchema | Fields.ListFieldSchema
  | Fields.LocationFieldSchema | Fields.MeasurementFieldSchema | Fields.NameFieldSchema | Fields.PercentageFieldSchema
  | Fields.PeriodFieldSchema | Fields.PhoneFieldSchema | Fields.PipelineFieldSchema | Fields.PriceFieldSchema
  | Fields.QuantityFieldSchema | Fields.RecurrenceFieldSchema | Fields.TextFieldSchema | Fields.TimeFieldSchema
  | Fields.URLFieldSchema | Fields.VideoFieldSchema

export type v7rSchemaObjectByName = { [name: string]: FieldObjects | v7rSchemaObjectByName }

export type v7rSchema = FieldObjects | v7rSchemaObjectByName
