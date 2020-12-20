import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    )
}

export default App;
