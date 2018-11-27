import BlockOptionsInterface from './BlockOptionsInterface'

export class RecordList extends BlockOptionsInterface {
  constructor (def = {}) {
    super()
    this.merge(def)
  }

  merge ({ moduleID, fields } = {}) {
    this.moduleID = moduleID || undefined
    this.fields = fields || []
  }
}
