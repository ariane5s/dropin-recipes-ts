import { Error, ErrorType } from "./Error"

interface ValidatorString {
  type: "string"
  options?: {
    required?: boolean
  }
}

interface ValidatorName {
  type: "name"
  options?: {
    person?: boolean
    required?: boolean
  }
}

interface ValidatorArray {
  type: "array"
  options?: {
    min?: number
    max?: number
    children?: ValidatorElement
  }
}

type ValidatorElement = ValidatorString|ValidatorName|ValidatorArray

const validate = (data: any, validatorData: ValidatorElement, context?: string[]): Promise<undefined> => {
  return new Promise((resolve, reject) => {
    const dataType = typeof data
    if(dataType !== validatorData.type) {
      reject(new Error(ErrorType.MISSING_DATA, `Type "${dataType}" must be "${validatorData.type}"`, context))
      return
    }
    resolve()
  })
}

interface ValidatorData { [name: string]: ValidatorElement }

export const Validator = <Data extends any>(data: Data, validatorData: ValidatorElement|ValidatorData, context?: string[]): Promise<Data> => {
  return new Promise((resolve, reject) => {
    if(typeof validatorData.type === "string") {
      validate(data, validatorData as ValidatorElement, context).then(() => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    } else {
      Object.keys(data).reduce((promise, name) => promise.then(list => {
        if(typeof (validatorData as ValidatorData)[name] === "undefined") {
          list.push(new Error(ErrorType.MISSING_DATA, `No validation found for key ${name}`, context))
          return list
        }
        if(typeof data[name] === "undefined") {
          list.push(new Error(ErrorType.MISSING_DATA, `No data found for key ${name}`, context))
          return list
        }
        if(typeof context !== "undefined") context.push(name)
        return validate(data[name], (validatorData as ValidatorData)[name], context).then(() => list).catch(error => [ ...list, error ])
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
