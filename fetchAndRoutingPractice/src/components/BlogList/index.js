import './index.css'
import {Link} from 'react-router-dom'

const BlogList = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-info">
        <h2 className="title">{title}</h2>
        <div className="author-details">
          <img src={avatarUrl} className="author-pic" alt={author} />
          <p className="author">{author}</p>
        </div>
        <img className="blog-img" src={imageUrl} alt={title} />
        <p className="topic">{topic}</p>
      </div>
    </Link>
  )
}

export default BlogList
