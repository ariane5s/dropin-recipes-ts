import { Name } from "../core"

export type SectionId = string

export interface ChildrenSection {
  name?: Name
  children: SectionId[]
}
