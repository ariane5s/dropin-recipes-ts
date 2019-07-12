import { LineOutput } from "./Line"

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
