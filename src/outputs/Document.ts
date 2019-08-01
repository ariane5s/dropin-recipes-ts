import { LineParams, Line } from "./Line"

export type DocumentId = string

export interface DocumentParams extends LineParams {
  linesOnly?: 1 | "1"
  t?: string // DEPRECATED, BEARER IS USED
}

export interface Document<Options = any> {
  type: DocumentType
  options: Options
  lines: Line[]
}
