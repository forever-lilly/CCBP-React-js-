import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimer: false,
    timeInSec: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeInSec: prevState.timeInSec + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimer: true})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimer: false, timeInSec: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimer: false})
  }

  renderSeconds = () => {
    const {timeInSec} = this.state
    const seconds = Math.floor(timeInSec % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSec} = this.state
    const minutes = Math.floor(timeInSec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimer} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="main-bg">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="timer-con">
          <div className="img-timer-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-para">Timer</p>
          </div>
          <div>
            <h1 className="timeing">{time}</h1>

            <button
              type="submit"
              className="start-btn"
              onClick={this.onClickStart}
              disabled={isTimer}
            >
              Start
            </button>
            <button
              type="submit"
              className="stop-btn"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="submit"
              className="reset-btn"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
