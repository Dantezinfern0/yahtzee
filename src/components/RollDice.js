import React, { Component } from 'react';

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: 6,
      keepDice: [],
    }
  }
  keepOne = (e) => {
    console.log('clicked',e.target.value)
    let counter = this.state.dice - 1
    let kept = []
    kept.push(e.target.value)
    this.setState({
      dice: counter,
      keepDice: kept,
    })
    console.log('kept',this.state.keptDice)
    console.log( 'dice counter' ,this.state.dice)
  }
  render() {
    return (
      <div>
        {this.props.rolledDice.map((m, i) => 
        <li key={i}>
           {m}
          <button  
            onClick={(e) => this.keepOne} 
            key={i}
            value={m}
            >
            keep
          </button>
        </li>
        )}
      </div>
    );
  }
}

export default RollDice;