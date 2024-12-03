// Write your code here
import './index.css'

const TodoItem = props => {
  const {deleteTodoId, todoDetails} = props
  const {id, title} = todoDetails

  const onClickFunction = () => {
    deleteTodoId(id)
  }
  return (
    <li>
      <p className="title">{title}</p>
      <button type="submit" className="btn" onClick={onClickFunction}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
