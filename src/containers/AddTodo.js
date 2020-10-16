import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

/* object shorthand form of mapDispatch 
https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object 
addTodo is passed in as a prop
*/
const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {
  // store input in component state
  const [todoText, setTodoText] = useState('')
  // update state
  const onChange = e => setTodoText(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTodo)