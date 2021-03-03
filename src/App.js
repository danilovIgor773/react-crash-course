import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const TASKS = [
    {
        id: 1,
        text: 'Garbage Collection',
        day: 'Feb 5th at 2:40',
        reminder: false
    },
    {
        id: 2,
        text: 'Kitchen Clean',
        day: 'Feb 6th at 12:40',
        reminder: false
    },
    {
        id: 3,
        text: 'Learn Css',
        day: 'Feb 10th at 00:40',
        reminder: true
    },
    {
        id: 4,
        text: 'Bycicle training',
        day: 'Feb 1th at 5:40',
        reminder: true
    }
]

function App() {
    const [tasks, setTasks] = useState(TASKS);
    const [toggleForm, setToggleForm] = useState(true);

    //delete task
    const deleteTaskHandler = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const toggleReminderHandler = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, reminder: !task.reminder} : task
        ))
    }

    const addTaskHandler = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;

        const newTask = {id, ...task};

        setTasks([...tasks, newTask]);

        console.log('[App.js] task', task);
    }

    const toggleTaskFormHandler = () => {
        setToggleForm(!toggleForm);
    }

    return (
        <div className="container">
          <Header toggleTaskForm={toggleTaskFormHandler} toggleForm={toggleForm}/>
            {toggleForm && <AddTask onAdd={addTaskHandler}/>}
            {
                tasks.length ?
                    (<Tasks
                        tasks={tasks}
                        deleteTask={deleteTaskHandler}
                        reminderToggle={toggleReminderHandler}
                />) : 'No tasks to show'
            }
        </div>
    );
}

export default App;
