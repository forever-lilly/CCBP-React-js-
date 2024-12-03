import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogList from '../BlogList'

import './index.css'

class BlogItem extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updateData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({blogDetails: updateData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state

    return (
      <div className="blogItem-Container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogDetails.map(eachItems => (
            <BlogList blogData={eachItems} key={eachItems.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogItem
