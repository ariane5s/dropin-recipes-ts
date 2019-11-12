import { Error, ErrorType } from "../Formats/Models/Error"
import { SchemaObject } from "../Formats/Objects/Schema"
import { FieldType } from "../Context/Types/FieldType"
import { TextFieldValidator } from "../Formats/Fields"

type SchemaObjectByName = { [name: string]: SchemaObject | SchemaObjectByName }

export const Validator = <Data extends any = any>(data: Data, schema: SchemaObject | SchemaObjectByName, context?: string|string[]): Promise<Error[]> => {
  if(typeof schema !== "object") {
    return Promise.resolve([ new Error(`Schema must be an object`, ErrorType.MISSING_DATA, context) ])
  }

  if(typeof schema.type === "string") {
    switch(schema.type) {
      case FieldType.TEXT: return TextFieldValidator<Data>(data, context).then(error => typeof error !== "undefined" ? [ error ] : [])
      default: return Promise.resolve([ new Error(`Type "${schema.type}" does not exist`, ErrorType.MISSING_DATA, context) ])
    }
  }

  if(typeof data !== "object") {
    return Promise.resolve([ new Error(`Data is not an object`, ErrorType.MISSING_DATA, context) ])
  }

  return Object.keys(schema).reduce((promise, schemaKey) => promise.then(list => {
    if(typeof data[schemaKey] === "undefined") {
      list.push(new Error(`No data found for key ${schemaKey}`, ErrorType.MISSING_DATA, context))
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

    return Validator(data[schemaKey], (schema as SchemaObjectByName)[schemaKey], childContext).then(errors => {
      list.push.apply(list, errors)
      return list
    })

  }), Promise.resolve([] as Error[])).then(errors => {
    const schemaKeys = Object.keys(schema)
    Object.keys(data).forEach(dataKey => {
      if(schemaKeys.indexOf(dataKey) === -1) {
        errors.push(new Error(`Unexpected key "${dataKey}"`, ErrorType.MISSING_DATA, context))
      }
    })
    return errors
  })

}
