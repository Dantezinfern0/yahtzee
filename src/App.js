import React, { Component } from 'react'
import Header from './components/Header'
import RollDice from './components/RollDice'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    rolledDice: [],
    numberOfDiceToRoll: 5
  }}
  getRandomNumber = () => {
    return Math.ceil(Math.random() *6)
  }
  rollDice = () => {
const hand = []
for (let i = 0; i<5; i++){
  hand.push(this.getRandomNumber())
} this.setState({
  
})
  }
  render() {
    return (
    <div>
      <header>Yahtzee!</header>
    <main>
      <button onClick={this.rollDice}>roll</button>
      <p>you have 2 rolls left</p>
      <ul>You Rolled
        <li>
          1 <button>keep</button>
        </li>
        <li>
          2 <button>keep</button>
        </li>
        <li>
          3 <button>keep</button>
        </li>
        <li>
          4 <button>keep</button>
        </li>
        <li>
          5 <button>keep</button>
        </li>
      </ul>
      <ul>You are keeping
        <li></li>

      </ul>
    </main>
    </div>
    )
  }
}

export default App
