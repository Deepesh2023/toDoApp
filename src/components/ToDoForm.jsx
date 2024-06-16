import { useState } from 'react'

const ToDoForm = () => {
  const [taskInput, setTaskInput] = useState('')

  return (
    <div>
      <form action="">
        <label htmlFor="taskInput">Create a new task: </label>
        <input
          type="text"
          name="taskInput"
          id="taskInput"
          value={taskInput}
          onChange={({ target }) => setTaskInput(target.value)}
        />
        <button>Add task</button>
      </form>
    </div>
  )
}
