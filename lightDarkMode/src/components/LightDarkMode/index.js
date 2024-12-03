// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkLight: true}

  onclickDarkOrLight = () => {
    this.setState(prevState => ({isDarkLight: !prevState.isDarkLight}))
  }

  render() {
    const {isDarkLight} = this.state

    const button = isDarkLight ? 'Light Mode' : 'Dark Mode'
    const backgroundCon = isDarkLight ? 'DarkModeCon' : 'LightModeCon'
    const headingColor = isDarkLight ? 'light' : 'dark'

    return (
      <div className="Background">
        <div className={`bgclass ${backgroundCon}`}>
          <h1 className={headingColor}> Click To Change Mode</h1>
          <button
            className="btn"
            onClick={this.onclickDarkOrLight}
            type="submit"
          >
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
