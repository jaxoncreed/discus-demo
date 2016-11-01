import React from 'react';
import operatorMap from '../operatorMap'
import variables from '../variables'

const Variable = React.createClass({
  changed: function(e) {
    console.log(this.props.update)
    this.props.update({
      type: 'variable',
      id: e.target.value
    }, this.props.route)
  },
  render() {
    return (
      <span className="operator-container"  title={this.props.route}>
        (<select value={this.props.statement.id} onChange={this.changed}>
          <option value="" disabled selected>Select a variable</option>
          {Object.keys(variables).map((key) => {
            return <option value={key}>{variables[key].text}</option>
          })}
          <option></option>
        </select>)
      </span>
    )
  }
});

export default Variable;
