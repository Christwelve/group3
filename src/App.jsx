import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editedTask, setEditedTask] = useState(""); 
  const [editIndex, setEditIndex] = useState(-1);  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setTasks([...tasks, task]); 
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === editIndex) {
        return editedTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    setEditIndex(-1);
    setEditedTask("");
  };
  


  return (
    <div className="Home">
      <a to="/">
        <h1>TodoReact</h1>
      </a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button className='little_button'>Check</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
