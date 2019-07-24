import { Entry } from "../core/Entry"

export type CompanyId = string

export interface Company extends Entry<CompanyId> {
  name: string
}
