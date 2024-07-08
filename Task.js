import { useContext } from "react";
import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";

const Task = ({ task: { title, description, createdAt, taskId } }) => {

    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="card">
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{formatDate(new Date(createdAt))}</div>
                <div className="description">{description}</div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit</div>
                    <div className="ui basic red button" onClick={() => deleteTask(taskId)}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Task;