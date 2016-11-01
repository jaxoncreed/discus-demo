import React from 'react';
import operatorMap from './operatorMap'

const Home = React.createClass({
  changeOption: function(route, e) {
    this.props.changeStatementType(e.target.value, route);
  },
  render() {
    const type = this.props.statement.type;
    const statement = this.props.statement.statement;
    let Operator = operatorMap[statement.type];
    let route = this.props.route;
    route.push('statement');
    return (
      <div className="statement">
        <select className="statement-dropdown" value={type} onChange={this.changeOption.bind(null, route)}>
          <option value="assume">Assume</option>
          <option value="fact">Fact</option>
          <option value="given">Given</option>
        </select>
        <Operator statement={statement} route={route} update={this.props.update} />
      </div>
    );
  }
});

export default Home;
