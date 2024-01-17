import React, { useReducer } from 'react'

const CHANGE_LABEL= 'CHANGE_LABE'
const CHANGE_IS_COMPLETED = 'CHANGE_IS_COMPLETED'

const initialState = {
  todoLabel: '',
  todoLabelCompleted: false,
}


const reduser = (state, action) => {
  switch (action.type) {
    case CHANGE_LABEL:
      return {...state, todoLabel: action.playload }
      case CHANGE_IS_COMPLETED: 
      return {...state, todoLabelCompleted: action.playload }
      default: 
      return state
  }
}


export default function TodoForm() {
  const [state, dispatch] = useReducer(reduser, initialState)
  return (
    <form id="todoForm">
      <h3>New Todo Form</h3>
      <label><span>Todo label:</span>
        <input
          type='text'
          name='todoLabel'
          placeholder='Type label'
        />
      </label>
      <label><span>Is completed:</span>
        <input
          type='checkbox'
          name='todoIsCompleted'
        />
      </label>
      <label><span>Create todo:</span>
        <input
          type='submit'
          value='Do it!'
        />
      </label>
    </form>
  )
}
