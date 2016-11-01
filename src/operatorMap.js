import should from './operators/Should.jsx'
import equals from './operators/Equals.jsx'
import variable from './operators/Variable.jsx'
import value from './operators/Value.jsx'
import ifstate from './operators/If.jsx'
import not from './operators/Not.jsx'
import is from './operators/Is.jsx'
import and from './operators/And.jsx'
import empty from './operators/Empty.jsx'

const operatorMap = {
  should: should,
  equals: equals,
  variable: variable,
  value: value,
  if: ifstate,
  not: not,
  is: is,
  and: and,
  empty: empty
}

export default operatorMap;
