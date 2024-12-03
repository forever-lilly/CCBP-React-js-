import {Link} from 'react-router-dom'
import {Component} from 'react'

class Home extends Component {
  header = () => (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </nav>
  )
  render() {
    return (
      <div>
        {this.header()}
        <div>
          <h1>welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to={'/register'} className="link-el">
            <button type="button">Register</button>
          </Link>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="website-register"
            />
          </div>
        </div>
      </div>
    )
  }
}
