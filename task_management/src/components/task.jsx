import React, { useState } from 'react';

function Task({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newPriority, setNewPriority] = useState(task.priority);

  const handleUpdate = () => {
    updateTask({ title: newTitle, priority: newPriority });
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <span className={`priority-${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
