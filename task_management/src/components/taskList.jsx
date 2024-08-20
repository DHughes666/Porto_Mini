import React from 'react';
import Task from './task';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          updateTask={(updatedTask) => updateTask(index, updatedTask)}
        />
      ))}
    </div>
  );
}

export default TaskList;
