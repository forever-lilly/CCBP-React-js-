import {Link} from 'react-router-dom'
import './index.css'

const Notfound = () => (
  <div>
    <Link to="/" className="link-el">
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          className="nav-logo"
          alt="website logo"
        />
      </nav>
    </Link>
    <div className="notFound">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not Found"
          className="pageNotFoundImage"
        />
      </div>
      <h1 className="headingPageNotFound">Page Not Found</h1>
      <p className="paraPageNotFound">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)
export default Notfound
