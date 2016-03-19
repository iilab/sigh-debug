import _ from 'lodash'
import Promise from 'bluebird'
import { Bacon } from 'sigh-core'
import { mapEvents } from 'sigh-core/lib/stream'

export default function(op, opts = {}) {
  return mapEvents(op.stream, function(event) {
    if (event.type !== 'add' && event.type !== 'change')
      return event

    console.log(event.type + ": " + event.path)

    // if (event.fileType !== 'relevantType') return event
    // TODO: alter event here or return a new event
    // event.changeFileSuffix('newSuffix')

    return event
  })
}
