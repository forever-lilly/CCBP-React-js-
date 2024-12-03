import {Link} from 'react-router-dom'

const CourseList = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <Link to={`/courses/${id}`} className="link-el">
      <li>
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default CourseList
