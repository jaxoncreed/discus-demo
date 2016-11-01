import React from 'react';
import operatorMap from '../operatorMap'

const Home = React.createClass({
  render() {
    let IfOperator = operatorMap[this.props.statement.if.type];
    let ThenOperator = operatorMap[this.props.statement.then.type];
    let ifRoute = this.props.route.slice(0);
    ifRoute.push('if');
    let thenRoute = this.props.route.slice(0);
    thenRoute.push('then');
    return (
      (<span className="operator-container"  title={this.props.route}>
        (<IfOperator statement={this.props.statement.if} route={ifRoute}  update={this.props.update} />) <i className="fa fa-arrow-right"></i> (<ThenOperator statement={this.props.statement.then} route={thenRoute}  update={this.props.update} />)
      </span>)
    )
  }
});

export default Home;
