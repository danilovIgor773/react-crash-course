import Task from './Task';


const Tasks = ({tasks, deleteTask, reminderToggle}) => {
    return (
        <>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onToggleReminder={reminderToggle}
                />
            ))}
        </>
    )
}

export default Tasks;