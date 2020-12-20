import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext'

const Task = ({task}) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
        <React.Fragment>
            <div className="list-item">
                <div className="list-row pb-0 mb-0">
                    <span className="task-title">{task.title}</span>
                    <div>
                        <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button onClick={() => findItem(task.id)} className="btn-delete task-btn">
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
                <div>
                    <small className="task-title">{task.start} - {task.end}</small>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Task;
