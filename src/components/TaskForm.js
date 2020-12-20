import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const [state, setState] = useState({
        title: "",
        start: "",
        end: ""
    });

    const handleChange = e => {
        var { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTask(state.title, state.start, state.end);
            setState(prevState => ({
                ...prevState,
                title : "", start: "", end: ""
            }));
        }else{
            editTask(state.title, state.start, state.end, editItem.id);
        }
    };

    useEffect(() => {
        if(editItem){
            setState(prevState => ({
                ...prevState,
                title : editItem.title, start: editItem.start, end: editItem.end
            }));
        }else{
            setState(prevState => ({
                ...prevState,
                title : "", start: "", end: ""
            }));
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="col-lg-12">
                <div className="row pb-2">
                    <div className="col-12 px-1">
                        <label className="add-task-label">Add Task</label>
                        <input type="text" name="title" className="form-control task-input" onChange={(e) => handleChange(e)} value={state.title} required />   
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 px-1">
                        <label className="add-task-label">Start</label>
                        <input type="time" name="start" className="form-control start-input" onChange={(e) => handleChange(e)} value={state.start} required />
                    </div>
                    <div className="col-6 px-1">
                        <label className="add-task-label">End</label>
                        <input type="time" name="end" className="form-control end-input" onChange={(e) => handleChange(e)} value={state.end} required />
                    </div>
                </div>  
            </div>
            <div className="row">  
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">{editItem?'Edit Task':'Add Task'}</button>
                    <button type="button" onClick={clearList} className="btn clear-btn">Clear</button>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;
