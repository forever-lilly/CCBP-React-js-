import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import './index.css'

const status = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fails: 'fails',
}

class CourseItemDetails extends Component {
  state = {apiStatus: status.initial, course: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: status.apiStatus})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const method = {
      method: 'GET',
    }
    const res = await fetch(url, method)
    if (res.ok === true) {
      const data = await res.json()
      const updateCourse = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({course: updateCourse, apiStatus: status.success})
    } else {
      this.setState({apiStatus: status.fails})
    }
  }

  successView = () => {
    const {course} = this.state
    const {name, imageUrl, description} = course
    return (
      <div>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  }

  loadingView = () => (
    <div className="profile-loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#ffffff"
        data-testid="loader"
        height="50"
        width="50"
      />
    </div>
  )

  failView = () => (
    <div className="FailView">
      <div>
        <img
          src="https:/fail/assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
          className="pageFailViewImage"
        />
      </div>
      <h1 className="headingPageFailView">Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button onClick={this.getData} type="button">
        Retry
      </button>
    </div>
  )

  FinalStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case status.loading:
        return this.loadingView()
      case status.success:
        return this.successView()
      case status.fails:
        return this.failView()
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
        <div> {this.FinalStatus()}</div>
      </div>
    )
  }
}
export default CourseItemDetails
