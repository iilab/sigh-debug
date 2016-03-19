import _ from 'lodash'
import Promise from 'bluebird'
import { Bacon } from 'sigh-core'
import Event from 'sigh/lib/Event'

import debug from '../'


require('source-map-support').install()
require('chai').should()
require('chai').assert()
require("sinon").sinon()


var TMP_PATH = 'test/tmp/debug'

describe('sigh-debug', () => {
  beforeEach(function() {
    sinon.stub(console, "log").returns(void 0);
    sinon.stub(console, "error").returns(void 0);
  });

  afterEach(function() {
    console.log.restore();
    console.error.restore();
  });

  it('Outputs event data on stdout', () => {
    var stream = Bacon.constant([ new Event({ path: 'src/test.js', type: 'add', data: '' }) ]);

    return deb({ stream }, TMP_PATH).toPromise(Promise).then(events => {
      console.log.getCall(0).args[0].should.equal("add: src/test.js")
//      assert.isTrue(console.log.called, "log should have been called.");
//      assert.isTrue(console.log.calledOnce);
//      expect(console.log.getCall(0).args[0]).to.equal("add: src/test.js");
    })

  })
})
