import React, { Component } from 'react';

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: 6,
    }
  }
  keepOne = () => {
    let counter = this.state.dice - 1
    this.setState({
      dice: counter,
    })
    
    console.log(this.state.dice)
  }
  render() {
    return (
      <div>
        {this.props.rolledDice.map((m, i) => 
        <li key={i}>
           {m}
          <button  
            onClick={this.keepOne} 
            key={i}>
            keep
          </button>
        </li>
        )}
      </div>
    );
  }
}

export default RollDice;