import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (text.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    onAddTask(newTask);
    setText('');
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;