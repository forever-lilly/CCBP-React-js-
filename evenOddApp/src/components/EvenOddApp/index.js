// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onclickFunction = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber, this.getRandomNumber)

    this.setState(prevState => ({
      number: prevState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    const heading = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-heading">
        <div className="sub-container">
          <h1 className="heading">Count {number}</h1>
          <p className="para"> Count is {heading}</p>
          <button className="btn" type="submit" onClick={this.onclickFunction}>
            Increment
          </button>
          <p className="describe">Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
