import { Error, ErrorType } from "../Formats/Models/Error"
import { SchemaObject } from "../Formats/Objects/Schema"
import { FieldType } from "../Context/Types/FieldType";
import { TextFieldValidator } from "../Formats/Fields";

type SchemaObjectByName = { [name: string]: SchemaObject | SchemaObjectByName }

const validate = <Data extends any>(data: Data, schema: SchemaObject, context?: string[]): Promise<Data> => {
  switch(schema.type) {
    case FieldType.TEXT: return TextFieldValidator<Data>(data, context)
    default: return Promise.reject(new Error(`Type "${schema.type}" does not exist`, ErrorType.MISSING_DATA, context))
  }
}

export const Validator = <Data extends any = any>(data: Data, schema: SchemaObject | SchemaObjectByName, context?: string[]): Promise<Data> => {
  return new Promise((resolve, reject) => {
    if(typeof schema !== "object") {
      reject([ new Error(`Schema must be an object`, ErrorType.MISSING_DATA, context) ])
    } else if(typeof schema.type === "string") {
      validate(data, schema as SchemaObject, context).then(validatedData => {
        resolve(validatedData)
      }).catch(error => {
        reject([ error ])
      })
    } else if(typeof data !== "object") {
      reject([ new Error(`Data is not an object`, ErrorType.MISSING_DATA, context) ])
    } else {
      Object.keys(data).reduce((promise, dataKey) => promise.then(list => {
        if(typeof (schema as SchemaObjectByName)[dataKey] === "undefined") {
          list.push(new Error(`No validation found for key ${dataKey}`, ErrorType.MISSING_DATA, context))
          return list
        }
        if(typeof data[dataKey] === "undefined") {
          list.push(new Error(`No data found for key ${dataKey}`, ErrorType.MISSING_DATA, context))
          return list
        }
        if(typeof context !== "undefined") context.push(dataKey)
        return validate(data[dataKey], schema[dataKey], context).then(() => list).catch(error => [ ...list, error ])
      }), Promise.resolve([] as Error[])).then(errors => {
        if(errors.length === 0) {
          resolve(data)
        } else {
          reject(errors)
        }
      })
    }
  })
}
