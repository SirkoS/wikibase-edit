require('should')
const { __ } = require('config')
const datatypeTests = __.require('lib/datatype_tests')

describe.only('datatype_tests', () => {
  it('should accept valid time strings', (done) => {
    [
      // https://www.wikidata.org/wiki/Help:Data_type#Time
      '2012', '1780-05', '1833-11-01',
      // https://www.wikidata.org/wiki/Special:ListDatatypes#time
      '+2013-01-01T00:00:00Z',
      // https://www.mediawiki.org/wiki/Wikibase/DataModel#Dates_and_times
      '+00000001850-00-00T00:00:00Z',
      // other
      '2003-01-15T00:00:00Z'
    ]
      .forEach((time) => datatypeTests.time(time).should.be.true(`should validate "${time}"`))
    done()
  })
  it('should reject invalid time strings', (done) => {
    [
      // time zone designator is not optional
      '+00000001850-00-00T00:00:00'
    ]
      .forEach((time) => datatypeTests.time(time).should.be.false(`should validate "${time}"`))
    done()
  })
})
