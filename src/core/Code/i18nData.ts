import { Name } from "../Formats/Names/Name"
import { XOR } from "./XORType"

type i18nDataFunction = (params: any) => string | Name

type i18nDataType = { [name: string]: XOR<string | Name, i18nDataFunction> }

export const i18nData = (data: i18nDataType): i18nDataType => data
