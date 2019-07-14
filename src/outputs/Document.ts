import { LineOutput } from "./Line"
import { DocumentType } from "../recipes/Document"

export interface DocumentParams {
  linesOnly?: 1|any
  filters?: string
  f?: string
  token?: string
  t?: string
}

export interface DocumentOutput<Options = any> {
  type: DocumentType
  options: Options
  lines: LineOutput[]
}
