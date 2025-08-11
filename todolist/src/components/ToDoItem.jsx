export default function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>
        <button
          className="edit-btn"
          onClick={() => {
            const newText = prompt("Edit Task:", task.text);
            if (newText?.trim()) editTask(task.id, newText);
          }}
        >
          ✏️
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </div>
    );
  }
  