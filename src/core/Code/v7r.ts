import { v7rSchema, v7rSchemaObjectByName } from "../Formats/Models/v7r"
import { l4rContext } from "../Formats/Models/l4r"
import { Error } from "../Formats/Models/Error"
import { i18nValidator } from "../../i18n/Validator"
import { ErrorType } from "../Context/Types/ErrorType"
import { FieldType } from "../Context/Types/FieldType"
import * as Fields from "../Formats/Fields"

export const v7r = <Data extends any = any>(data: Data, schema: v7rSchema, context?: l4rContext): Promise<Error[]> => {
  if(typeof schema !== "object") {
    return Promise.resolve([ new Error(i18nValidator.schemaMustBeAnObject, ErrorType.INCOMPATIBLE, context) ])
  }

  if(typeof schema.type === "string") {
    switch(schema.type) {
      case FieldType.AUDIO: return Fields.AudioFieldValidator(data, context)
      case FieldType.BOOLEAN: return Fields.BooleanFieldValidator(data, context)
      case FieldType.COLLECTION: return Fields.CollectionFieldValidator(data, context)
      case FieldType.COLOR: return Fields.ColorFieldValidator(data, context)
      case FieldType.DATE: return Fields.DateFieldValidator(data, context)
      case FieldType.EMAIL: return Fields.EmailFieldValidator(data, context)
      case FieldType.ENVIRONMENT: return Fields.EnvironmentFieldValidator(data, context)
      case FieldType.FILE: return Fields.FileFieldValidator(data, context)
      case FieldType.IMAGE: return Fields.ImageFieldValidator(data, context)
      case FieldType.LANGUAGE: return Fields.LanguageFieldValidator(data, context)
      case FieldType.LIST: return Fields.ListFieldValidator(data, context)
      case FieldType.LOCATION: return Fields.LocationFieldValidator(data, context)
      case FieldType.MEASUREMENT: return Fields.MeasurementFieldValidator(data, context)
      case FieldType.NAME: return Fields.NameFieldValidator(data, context)
      case FieldType.PERCENTAGE: return Fields.PercentageFieldValidator(data, context)
      case FieldType.PERIOD: return Fields.PeriodFieldValidator(data, context)
      case FieldType.PHONE: return Fields.PhoneFieldValidator(data, context)
      case FieldType.PIPELINE: return Fields.PipelineFieldValidator(data, context)
      case FieldType.PRICE: return Fields.PriceFieldValidator(data, context)
      case FieldType.QUANTITY: return Fields.QuantityFieldValidator(data, context)
      case FieldType.RECURRENCE: return Fields.RecurrenceFieldValidator(data, context)
      case FieldType.TEXT: return Fields.TextFieldValidator(data, context)
      case FieldType.TIME: return Fields.TimeFieldValidator(data, context)
      case FieldType.URL: return Fields.URLFieldValidator(data, context)
      case FieldType.VIDEO: return Fields.VideoFieldValidator(data, context)
      default: return Promise.resolve([ new Error(i18nValidator.typeNotFound(schema.type), ErrorType.INCOMPLETE, context) ])
    }
  }

  if(typeof data !== "object") {
    return Promise.resolve([ new Error(i18nValidator.dataMustBeAnObject, ErrorType.INCOMPATIBLE, context) ])
  }

  return Object.keys(schema).reduce((promise, schemaKey) => promise.then(list => {
    if(typeof data[schemaKey] === "undefined") {
      list.push(new Error(i18nValidator.noDataFoundForKey(schemaKey), ErrorType.UNFINDABLE, context))
      return list
    }

    let childContext
    if(typeof context !== "undefined") {
      if(Array.isArray(context)) {
        childContext = [ ...context, schemaKey ]
      } else {
        childContext = [ context, schemaKey ]
      }
    }

    return v7r(data[schemaKey], (schema as v7rSchemaObjectByName)[schemaKey], childContext).then(errors => {
      list.push.apply(list, errors)
      return list
    })

  }), Promise.resolve([] as Error[])).then(errors => {
    const schemaKeys = Object.keys(schema)
    Object.keys(data).forEach(dataKey => {
      if(schemaKeys.indexOf(dataKey) === -1) {
        errors.push(new Error(i18nValidator.unexpectedKey(dataKey), ErrorType.UNEXPECTED, context))
      }
    })
    return errors
  })

}
