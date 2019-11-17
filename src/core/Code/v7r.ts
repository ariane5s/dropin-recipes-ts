import { v7rSchema, v7rSchemaObjectByName } from "../Formats/Models/v7r"
import { Error } from "../Formats/Models/Error"
import { ErrorType } from "../Context/Types/ErrorType"
import { FieldType } from "../Context/Types/FieldType"
import { i18nValidator } from "../../i18n/Validator"
import { TextFieldValidator } from "../Formats/Fields"

export const v7r = <Data extends any = any>(data: Data, schema: v7rSchema, context?: string|string[]): Promise<Error[]> => {
  if(typeof schema !== "object") {
    return Promise.resolve([ new Error(i18nValidator.schemaMustBeAnObject, ErrorType.INCOMPATIBLE, context) ])
  }

  if(typeof schema.type === "string") {
    switch(schema.type) {
      case FieldType.TEXT: return TextFieldValidator<Data>(data, context).then(error => typeof error !== "undefined" ? [ error ] : [])
      default: return Promise.resolve([ new Error(i18nValidator.typeNotFound(schema.type), ErrorType.INCOMPLETE, context) ])
    }
  }

  if(typeof data !== "object") {
    return Promise.resolve([ new Error(i18nValidator.dataIsNotAnObject, ErrorType.INCOMPATIBLE, context) ])
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
