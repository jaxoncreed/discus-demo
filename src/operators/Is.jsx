import React from 'react';
import operatorMap from '../operatorMap'

const Home = React.createClass({
  render() {
    let VariableOperator = operatorMap[this.props.statement.variable.type];
    let ValOperator = operatorMap[this.props.statement.value.type];
    let varRoute = this.props.route.slice(0);
    varRoute.push('variable');
    let valRoute = this.props.route.slice(0);
    valRoute.push('value');

    let error
    return (
      (<span className="operator-container">
        <VariableOperator statement={this.props.statement.variable} route={varRoute}  update={this.props.update} /> is <ValOperator statement={this.props.statement.value} route={valRoute}  update={this.props.update} />
      </span>)
    )
  }
});

export default Home;
