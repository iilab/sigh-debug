import _ from 'lodash'
import Promise from 'bluebird'
import { Bacon } from 'sigh-core'
import { mapEvents } from 'sigh-core/lib/stream'

export default function(op, opts = {}) {
  return mapEvents(op.stream, function(event) {

    console.log(event.type + ": " + event.path)

    return event
  })
}
