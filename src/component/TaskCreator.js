import { useState, useEffect } from "react";

export const TaskCreator = ({createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a New Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)} />

      <button>Save Task</button>
    </form>
  )

}