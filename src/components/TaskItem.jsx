function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.text}
        </span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </li>
  );
}

export default TaskItem;