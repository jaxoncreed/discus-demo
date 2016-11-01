import React from 'react';
import operatorMap from '../operatorMap'

const Home = React.createClass({
  render() {
    return (
      <span className="operator-container" >
        ({this.props.statement.vals.map((val, index) => {
          let Operator = operatorMap[val.type];
          let route = this.props.route.slice(0);
          route.push('vals');
          route.push(index);
          return(<span>
            <Operator statement={val} route={route} update={this.props.update} />
            {(index < (this.props.statement.vals.length - 1)) ? ' & ' : ''}
          </span>);
        })})
      </span>
    )
  }
});

export default Home;
