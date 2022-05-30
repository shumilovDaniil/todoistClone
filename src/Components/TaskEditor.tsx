import React, {FC, useState} from 'react';
import {ITask} from "../types/types";

export interface ITaskEditor {
    handleEditor: () => void,
    addTask: (newTask: ITask) => void
}

const TaskEditor:FC<ITaskEditor> = ({handleEditor, addTask}) => {
    const [inputValue, setInputValue] = useState('')

    function closeTaskEditor() {
        handleEditor()
    }

    function createNewTask(value: string) {
        if (value) {
            const newTask = {
                id: Date.now(),
                value
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
