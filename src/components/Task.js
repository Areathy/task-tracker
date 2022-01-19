
const Tasks = ({tasks}) => {

    return (
        <div>
            {tasks.map((task) => (
                <h4 key={task.id}>{task.text}</h4>
            ))}
        </div>
    )
}

export default Tasks