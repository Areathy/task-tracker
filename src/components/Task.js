import { useState } from "react"

const Tasks = () => {

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

    return (
        <div>
            {tasks.map((task) => (
                <h4 key={task.id}>{task.day}</h4>
            ))}
        </div>
    )
}

export default Tasks