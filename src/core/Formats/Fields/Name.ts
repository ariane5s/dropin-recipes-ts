import { NameArticle } from "../../Context/Fields/NameArticle"
import { LanguagesObject } from "../Objects/Languages"
import { i18nQuery } from "../Queries/i18n"
import { ModelField_RequiredOption, ModelField_LengthOptions, ModelField, ModelField_DefaultOption } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"
import { i18nValidator } from "../../../i18n/Validator"
import { ErrorType } from "../../Context/Types/ErrorType"

export type NameFieldOptions = ModelField_RequiredOption & ModelField_LengthOptions & ModelField_DefaultOption<NameField_i18n> & {
  person?: { fullName?: boolean } | { fullName: true, middleName?: boolean }
}

export type NameFieldSchema = ModelField<FieldType.NAME, NameFieldOptions>

export type NameField_Text<TextType = string | number> = TextType | TextType[]

export interface NameField_ByNumber<TextType = NameField_Text> {
  one?: TextType
  many?: TextType
  short?: TextType
  article?: NameArticle
}

export type NameField_ByLanguage<TextType = NameField_Text> = LanguagesObject<TextType | NameField_ByNumber<TextType>>

export type NameField<TextType = NameField_Text> = TextType | NameField_ByLanguage<TextType>

export type NameField_i18n<TextType = string | number, QueryType = NameField> = (TextType|i18nQuery<QueryType>) | (TextType|i18nQuery<QueryType>)[]

export const NameFieldValidator = (data: NameField_i18n | any, context?: l4rContext): Promise<Error[]> => {
  if(typeof data === "number" || typeof data === "string") return Promise.resolve([])
  if(typeof data !== "object") {
    return Promise.resolve([ new Error(i18nValidator.dataMustBeAnObject, ErrorType.INCOMPATIBLE, context) ])
  }
  if(Array.isArray(data)) {
    return (data as NameField_i18n[]).reduce((promise, currentElement, currentIndex) => promise.then(list => {
      let currentContext
      if(typeof context !== "undefined") {
        if(Array.isArray(context)) {
          currentContext = [ ...context, currentIndex.toString() ]
        } else {
          currentContext = [ context, currentIndex.toString() ]
        }
      }
      return NameFieldValidator(currentElement, currentContext).then(errors => {
        list.push.apply(list, errors)
        return list
      })
    }), Promise.resolve([] as Error[]))
  }

  if(typeof data.$ !== "undefined") {
    if(typeof data.$ !== "object") {
      return Promise.resolve([ new Error(i18nValidator.dataMustBeAnObject, ErrorType.INCOMPATIBLE, context) ])
    }
    if(typeof data.$.type === "undefined") {
      return Promise.resolve([ new Error(i18nValidator.noDataFoundForKey("type"), ErrorType.INCOMPLETE, context) ])
    }
    if(data.$.type !== "i18n") {
      return Promise.resolve([ new Error(i18nValidator.dataShouldBe("i18n"), ErrorType.INCOMPATIBLE, context) ])
    }
    if(typeof data.$.name === "undefined") {
      return Promise.resolve([ new Error(i18nValidator.noDataFoundForKey("name"), ErrorType.INCOMPLETE, context) ])
    }
  } else {
    const dataByLanguage = data as NameField_ByLanguage<NameField_i18n>
    if(typeof dataByLanguage["*"] !== "undefined") {
    } else {
    }
  }

  return Promise.resolve([])
}
