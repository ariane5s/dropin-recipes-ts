import { i18n } from "./core/Code/i18n"
import { i18nLanguages } from "./i18n"
import { Language } from "./core/Context/Language"

/*Validator("test1", { type: "text" }).then(errors => {
  console.log("test1", errors)
})

Validator(12, { type: "text" }).then(errors => {
  console.log(12, errors)
})

Validator({ a: "test2" }, { a: { type: "text" } }).then(errors => {
  console.log("test2", errors)
})

Validator({ a: 2 }, { a: { type: "text" } }).then(errors => {
  console.log("test3", errors)
})*/

/*Validator({ a: { b: "2", c: "2" } }, { a: { b: { type: FieldType.TEXT } } }, "test4").then(errors => {
  console.log("test4", errors)
})*/

console.log(i18n(i18nLanguages.current(Language.ENGLISH), { language: Language.FRENCH }))
