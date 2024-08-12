import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }

    }
    const handleEdit = (index) => {
        setTask(tasks[index])
        // setTasks(...tasks, tasks[index] = task);
    }
    return (
        <div>
            <h1>Todo List</h1>
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
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Todo;