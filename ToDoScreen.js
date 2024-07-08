import { useState, useEffect } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import { addTask, getTasksForCurrentUser } from "../apis/task-api";


const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);

    const fetchTasks = async () => {
        const tasks = await getTasksForCurrentUser();
        setTaskList([...tasks]);
    }

    useEffect(() => {
        fetchTasks();
    }, [])
    let addNewTask = async (task) => {
        try {
            await addTask({ ...task });
            setTaskList([...taskList, {
                ...task, isComplete: false, 
            }])
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>

                <section>
                    <div className="ui cards">
                        {taskList.map((task, index) => (
                            <Task task={task} key={index} />
                        ))}
                    </div>
                </section>
            </div>
            <AddTask onSubmit={addNewTask} validator={({ title, description }) => {
                if (title?.length && !title.includes("\n") && description?.length) {
                    console.log(`Is Valid`);
                    return true;
                }
                console.log(`Invalid`);
                return false;
            }} />
        </div>
    );
}

export default ToDoScreen;