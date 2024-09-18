import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
    localStorage.setItem('Todolist', tasks);
    console.log('Todolist', localStorage.getItem('Todolist'))

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            if (isEditing) {
                const updatedTasks = tasks.map((t, index) =>
                    index === currentTaskIndex ? task : t
                )
                setTasks(updatedTasks);
                setIsEditing(false);
                setCurrentTaskIndex(null)
            }
            else {
                setTasks([...tasks, task]);
            }
            setTask('')

        }

    }
    const handleEdit = (idx) => {
        setTask(tasks[idx])
        setIsEditing(true);
        setCurrentTaskIndex(idx);
    }
    const handleDelete = (index) => {
        if (index > -1) {
            const updatedTasks = [...tasks]
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
        }

    }
    return (
        <div>
            {/* <h1>Todo List</h1> */}
            <form>
                <input type="text" placeholder="Add task" value={task} onChange={handleChange} />
                <button onClick={addTask}>Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Todo;