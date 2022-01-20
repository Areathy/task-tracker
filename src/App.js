import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";

function App() {
  
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    },
    {
        "id": 3,
        "text": "Enjoy Life",
        "day": "Jan 20th at 12:00am",
        "reminder": false
    }
]) 

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  {...task, reminder : !task.reminder} : task))
}

//Add Task
const addTask = (task) => {
  console.log(task)
}

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder} />) :
        ('No Task available')}
    </div>
  );
}

export default App;
