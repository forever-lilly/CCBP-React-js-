import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter_container">
        <h1 className="counter-heading">
          The Button has been clicked <br />
          <span className="counting-number"> {count} </span>times
        </h1>
        <p className="counter-para">Click the button to increase the count</p>
        <button className="click-btn" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
