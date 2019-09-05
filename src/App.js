import React, { Component } from 'react'
import Header from './components/Header'
import RollDice from './components/RollDice'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolledDice: [],
      numberOfDiceToRoll: 5
    }
  }
  getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }
  rollDice = () => {
    const hand = []
    for (let i = 0; i < this.state.numberOfDiceToRoll; i++) {
      hand.push(this.getRandomNumber())
    }
    console.log('hand', hand)
    this.setState({
      rolledDice: hand
    })
    console.log('state', this.state.rolledDice)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <button onClick={this.rollDice}>roll</button>
          <p>you have 2 rolls left</p>
          <ul>
            You Rolled
            {<RollDice rolledDice={this.state.rolledDice} />}
          </ul>
          <ul>
            You are keeping
            <li></li>
          </ul>
        </main>
      </div>
    )
  }
}

export default App
