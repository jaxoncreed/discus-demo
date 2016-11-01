import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import tourData from './tour-data';
import Statement from './Statement.jsx'

const Home = React.createClass({
  getInitialState: function() {
    return {
      stepNumber: 0,
      statements: tourData[0].statements,
      proving: ''
    }
  },
  advanceStep: function() {
    this.setState({
      stepNumber: this.state.stepNumber + 1,
      statements: tourData[this.state.stepNumber + 1].statements,
      proving: tourData[this.state.stepNumber + 1].proving
    });
  },
  prevStep: function() {
    this.setState({
      stepNumber: this.state.stepNumber - 1,
      statements: tourData[this.state.stepNumber - 1].statements,
      proving: tourData[this.state.stepNumber - 1].proving
    });
  },

  updateOperator: function(val, route) {
    // Get the value
    let curVal = this.state.statements
    route.forEach((key, i) => {
      if (i < (route.length - 1)) {
        curVal = curVal[key]
      }
    });
    curVal[route[route.length - 1]] = val;
    this.setState(this.state)
  },
  addStatement: function() {
    this.state.statements.push({
      type: 'assume',
      statement: {
        type: 'empty'
      }
    })
    this.setState(this.state);
  },
  submit: function() {
    alert('Your proof disproves the prompt rather than proving as you\'ve indicated.')
  },
  changeStatementType: function(type, route) {
    let curVal = this.state.statements
    route.forEach((key, i) => {
      if (i < (route.length - 1)) {
        curVal = curVal[key]
      }
    });
    curVal.type = type;
    console.log(this.state);
    this.setState(this.state)
  },
  stateFunc: function(val) {
    this.setState(val);
  },
  render() {
    return (
      <div className="tour">
        <div className="tour-prompt">
          {(() => { if (this.state.stepNumber > 0) { return (
            <i className="fa fa-arrow-circle-o-left fa-2x arrow-icon"
                onClick={this.prevStep}></i>
          )}})()}
          <p>{tourData[this.state.stepNumber].message}</p>
          {(() => { if (this.state.stepNumber < tourData.length - 1) { return (
            <i className="fa fa-arrow-circle-o-right fa-3x arrow-icon"
                onClick={this.advanceStep}></i>
          )}})()}
      </div>
        <div className="tour-area">
          <h2>You should go outside when it's raining.</h2>
          <p>
            <span>Write your own argument:</span>
            {(() => { if (this.state.proving === 'proving') {
                return (<i className="fa fa-thumbs-up thumb" onClick={this.stateFunc.bind(null, {proving: ''})}></i>);
              } else {
                return (<i className="fa fa-thumbs-o-up thumb" onClick={this.stateFunc.bind(null, {proving: 'proving'})}></i>);
            }})()}
            {(() => { if (this.state.proving === 'disproving') {
                return (<i className="fa fa-thumbs-down thumb" onClick={this.stateFunc.bind(null, {proving: ''})}></i>);
              } else {
                return (<i className="fa fa-thumbs-o-down thumb" onClick={this.stateFunc.bind(null, {proving: 'disproving'})}></i>);
            }})()}
          </p>
          {this.state.statements.map((statement, index) => {
            return (
              <Statement
                statement={statement}
                route={[index]}
                update={this.updateOperator}
                changeStatementType={this.changeStatementType} />
            );
          })}
          <input type="submit" value="+" onClick={this.addStatement} />
          <br />
          <input type="submit" value="Submit Argument" onClick={this.submit} />
        </div>
    	</div>
    );
  }
});

export default Home;
