import {Component} from 'react'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import CourseList from '../CourseList'
import './index.css'

const apiStatus = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fail: 'fail',
}

class Home extends Component {
  state = {
    api: apiStatus.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({api: apiStatus.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const option = {
      method: 'GET',
    }

    const response = await fetch(url, option)
    if (response) {
      const data = await response.json()
      const updateData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: updateData, api: apiStatus.success})
    } else {
      this.setState({api: apiStatus.fail})
    }
  }

  successView = () => {
    const {courseList} = this.state
    return (
      <div>
        <h1 className="main-heading">Courses</h1>
        <ul>
          {courseList.map(i => (
            <CourseList details={i} key={i.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="profile-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  loadFail = () => (
    <div className="FailView">
      <div>
        <img
          src="https:/fail/assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="not found"
          className="pageFailViewImage"
        />
      </div>
      <h1 className="headingPageFailView">Page Not Found</h1>
      <p className="paraPageFailView">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  )

  FinalRender = () => {
    const {api} = this.state

    switch (api) {
      case apiStatus.loading:
        return this.renderLoader()
      case apiStatus.success:
        return this.successView()
      case apiStatus.fail:
        return this.loadFail()

      default:
        return null
    }
  }

  render() {
    return (
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
        <div>{this.FinalRender()}</div>
      </div>
    )
  }
}

export default Home
