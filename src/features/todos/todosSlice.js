import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    // string that is used as the prefix for generated action types
  name: 'todos',
  initialState: [],
  // keys become action type strings, functions are reducers ran when action type is dispatched
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer