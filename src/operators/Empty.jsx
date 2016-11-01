import React from 'react';
import operatorInitMap from '../operatorInitMap';

const Empty = React.createClass({
  change: function(e) {
    this.props.update(operatorInitMap[e.target.value], this.props.route);
  },
  render() {
    return (
      <span className="operator-container" title={this.props.route}>
        (<select onChange={this.change} defaultValue="">
          <option value="" disabled>Select a new operator</option>
          {Object.keys(operatorInitMap).map((key) => {
            return(<option value={key}>{key}</option>)
          })}
        </select>)
      </span>
    )
  }
});

export default Empty;
