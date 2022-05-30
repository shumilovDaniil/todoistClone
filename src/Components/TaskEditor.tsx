import React, {FC, useState} from 'react';
import {ITask} from "../types/types";
import {useLocation} from "react-router-dom";

export interface ITaskEditor {
    handleEditor: () => void,
    addTask: (newTask: ITask) => void
}

const TaskEditor:FC<ITaskEditor> = ({handleEditor, addTask}) => {
    const [inputValue, setInputValue] = useState('')

    function closeTaskEditor() {
        handleEditor()
    }

    const location = useLocation()

    function createNewTask(value: string) {
        if (value && location.pathname === '/') {
            const newTask = {
                id: Date.now(),
                value,
                category: 'inbox'
            }
            addTask(newTask)
            setInputValue('')
        } else if (value && location.pathname === '/today') {
            const newTask = {
                id: Date.now(),
                value,
                category: 'today'
            }
            addTask(newTask)
            setInputValue('')
        }
    }

    return (
        <div>
            <input
                onChange={event => setInputValue(event.target.value)}
                value={inputValue}
                className={'rounded-xl border-2 border-red-500 p-1 px-4 mb-2'}
                type="text"
                placeholder={'Task name'}/>
            <div className="flex gap-2">
                <button
                    onClick={() => createNewTask(inputValue)}
                    className={'bg-red-500 p-1  px-6 rounded-xl text-white'}>Add task</button>
                <button
                    onClick={closeTaskEditor}
                    className={'bg-gray-400 p-1 px-6 rounded-xl text-white'}>Cancel</button>
            </div>
        </div>
    );
};

export default TaskEditor;
