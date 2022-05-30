import React, {FC, useState} from 'react';
import TaskList, {ITaskListProps} from "./TaskList";
import TaskEditor from "./TaskEditor";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {ITask} from "../types/types";
import {useLocation, useParams} from "react-router-dom";

interface ICategorySwitcherProps extends ITaskListProps {
    addTask: (newTask: ITask) => void
}

const CategorySwitcher: FC<ICategorySwitcherProps> = ({tasks, removeTask, addTask}) => {
    const [disableTaskEditor, setDisableTaskEditor] = useState(false)

    function handleEditor() {
        setDisableTaskEditor(prev => !prev)
    }

    const location = useLocation()

    return (
        <div>
            {
                (location.pathname === '/') ?
                    <TaskList tasks={tasks.filter(task => task.category === 'inbox')} removeTask={removeTask}/>
                    : <TaskList tasks={tasks.filter(task => task.category === 'today')} removeTask={removeTask}/>
            }

            {
                (disableTaskEditor)
                    ?
                    <TaskEditor handleEditor={handleEditor} addTask={addTask}/>
                    :
                    <button
                        onClick={handleEditor}
                        className={'inline-flex items-center text-red-500 py-2'}
                    >
                        <AiOutlinePlusSquare color={'#ff2525'} className={'mr-2'}/>Add task</button>
            }
        </div>
    );
};

export default CategorySwitcher;
