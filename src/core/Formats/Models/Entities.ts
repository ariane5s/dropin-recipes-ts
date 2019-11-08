
export interface ModelEntity<Id> {
  id: Id
  save: (callback: () => any) => Response
}
