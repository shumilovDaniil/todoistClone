import React, {FC, useState} from 'react';
import TaskEditor from "./Components/TaskEditor";
import {AiOutlinePlusSquare} from "react-icons/ai";
import TaskList from "./Components/TaskList";
import {ITaskEditor} from "./Components/TaskEditor";
import {ITask} from "./types/types";
import Sidebar from "./Components/Sidebar";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Inbox from "./Components/Inbox";

const App: FC = () => {
    const [tasks, setTasks] = useState([
        {
            id: 123123123,
            value: 'text 1'
        },
        {
            id: 66563123123,
            value: 'text 2'
        },
        {
            id: 442223123,
            value: 'text 3'
        }
    ])

    function addTask(newTask: ITask) {
        setTasks((state) => [...state, newTask])
    }

    function removeTask(task: ITask) {
        setTasks(prevState => prevState.filter(i => i.id !== task.id))
    }

    return (
        <div className="App p-5 flex gap-10">
            <Router>
                <Sidebar/>
                <Routes>
                    <Route
                        element={<Inbox tasks={tasks} removeTask={removeTask} addTask={addTask}/>}
                        path="/">
                    </Route>
                    <Route path="/today" element={<h2>today</h2>}>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
