import React from 'react';
import operatorMap from '../operatorMap'

const Value = React.createClass({
  render() {
    console.log(this.props.route)
    return (
      <span className="operator-container"  title={this.props.route}>
        (<select value={this.props.statement.val.toString()}>
          <option value="" disabled>Select a value</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>)
      </span>
    )
  }
});

export default Value;
