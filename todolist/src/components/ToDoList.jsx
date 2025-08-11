import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks yet. Add one!</p>
      )}
    </div>
  );
}
