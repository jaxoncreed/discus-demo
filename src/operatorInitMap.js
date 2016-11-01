const opInitMap = {
  and: {
    type: 'and',
    vals: [
      {
        type: 'empty'
      },
      {
        type: 'empty'
      }
    ]
  },
  equals: {
    type: 'equals',
    vals: [
      {
        type: 'empty'
      },
      {
        type: 'empty'
      }
    ]
  },
  if: {
    type: 'if',
    if: {
      type: 'empty'
    },
    then: {
      type: 'empty'
    }
  },
  is: {
    type: 'is',
    variable: {
      type: 'empty'
    },
    value: {
      type: 'empty'
    }
  },
  not: {
    type: 'not',
    val: {
      type: 'empty'
    }
  },
  should: {
    type: 'should',
    val: {
      type: 'empty'
    }
  },
  value: {
    type: 'value',
    val: ''
  },
  variable: {
    type: 'variable',
    id: ''
  }
}

export default opInitMap;
