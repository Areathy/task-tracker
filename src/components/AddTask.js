import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setRiminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add text')
            return
        }

        onAdd({text, day, reminder})

        // clearing the fields
        setText('')
        setDay('')
        setRiminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' 
                placeholder="Add Task"
                value='text'
                onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day and Time</label>
                <input type='text' 
                placeholder="Add Day and Time"
                value='day'
                onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox'
                value='reminder'
                checked={reminder}
                onChange={(e) => setRiminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" 
            type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask;