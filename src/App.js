import { useState, useEffect } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";

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
  const fetchTasks = async (id) => {
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
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
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
    <div className="App">
      <Header onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />) :
        ('No Task available')}
    </div>
  );
}

export default App;
