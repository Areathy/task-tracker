import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  // useState
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // useEffect
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }

    getTasks();
  }, [])

  // Fetch Task
  const fetchTasks = async () => {
    const respond = await fetch('http://localhost:7000/tasks',
    {method: 'GET'});
    const data = await respond.json();
    console.log(data)

    return data;
  }

  // Fetch Task By ID
  const fetchTask = async (id) => {
    const respond = await fetch(`http://localhost:7000/tasks/${id}`,
    {method: 'GET'});
    const data = await respond.json();
    console.log(data)

    return data;
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(` http://localhost:7000/tasks/${id}`,
    {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id);
    const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

    const respond = await fetch(`http://localhost:7000/tasks/${id}`,
    {method: 'PUT',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(updateTask)
    })

    const data = await respond.json();

    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: data.reminder } : task))
  }

  //Add Task
  const addTask = async (task) => {
    // // Add ramdomize id
    // const id = Math.floor(Math.random() * 10000) + 1;

    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask])

    const respond = await fetch('http://localhost:7000/tasks',
    {method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await respond.json();

    setTasks([...tasks, data])
  }

  return (
    <Router>

    <div className="App">
      <Header onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />) :
        ('No Task available')}

        <Routes><Route path='/about' component={About} /></Routes>
        <Footer />
    </div>

    </Router>
  );
}

export default App;
