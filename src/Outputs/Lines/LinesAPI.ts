import { ModelAPI_One } from "../../Formats/Models/ModelAPI"

type Models = ModelAPI_One<any, any, any>

interface Context {}

export const LinesAPI: Models & Context = {
  get: (selector) => {},
  getById: (selector) => {},
}
