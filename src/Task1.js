import React, { useEffect, useState } from "react";
import "./Task1.css";

function Task1() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Python",
      priority: "High",
      completed: false
    },
    {
      id: 2,
      name: "Practice JavaScript",
      priority: "Medium",
      completed: true
    }
  ]);

  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => {
        setUser(data);
      });

  }, []);

  const addTask = () => {

    if (taskName === "") {
      alert("Enter task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
  };
  const deleteTask = (id) => {

    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  };
  const completeTask = (id) => {

    const newTasks = tasks.map(task => {

      if (task.id === id) {

        return {
          ...task,
          completed: !task.completed
        };

      } else {
        return task;
      }

    });

    setTasks(newTasks);
  };
  const completedCount = tasks.filter(
    task => task.completed === true
  ).length;
  const pendingCount = tasks.filter(
    task => task.completed === false
  ).length;


  return (

    <div className={darkMode ? "dark app" : "app"}>

      <h1>Task Management Dashboard</h1>


      {/* User */}

      <div className="profile">

        <h2>
          Welcome, {user ? user.name : "Loading..."} 👋
        </h2>

        {user && <p>Email: {user.email}</p>}

      </div>


      {/* Task Count */}

      <div className="count">

        <div>
          <h3>Total</h3>
          <p>{tasks.length}</p>
        </div>

        <div>
          <h3>Completed</h3>
          <p>{completedCount}</p>
        </div>

        <div>
          <h3>Pending</h3>
          <p>{pendingCount}</p>
        </div>

      </div>


      {/* Add Task */}

      <div className="add-task">

        <h2>Add Task</h2>

        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />


        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >

          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>

        </select>


        <button onClick={addTask}>
          Add Task
        </button>

      </div>


      {/* Task List */}

      <div className="tasks">

        <h2>My Tasks</h2>

        {tasks.map(task => (

          <div className="task" key={task.id}>

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />

            <span
              className={
                task.priority === "High"? "high": task.priority === "Medium"? "medium": "low"
              }
            >
              {task.name} - {task.priority}
            </span>


            <button
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>


      {/* Dark Mode */}

      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
  );
}

export default Task1