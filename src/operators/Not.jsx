import React from 'react';
import operatorMap from '../operatorMap'

const Home = React.createClass({
  render() {
    let Val = operatorMap[this.props.statement.val.type];
    let route = this.props.route.slice(0);
    route.push('val');
    return (
      <span className="operator-container">
        not(<Val statement={this.props.statement.val} route={route}  update={this.props.update} />)
      </span>
    )
  }
});

export default Home;
