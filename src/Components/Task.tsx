import React, {FC} from 'react';
import {ITask} from "../types/types";

interface ITaskProps {
    task: ITask
    removeTask: (task: ITask) => void,
}

const Task: FC<ITaskProps> = ({task, removeTask}) => {

    function handleRemoveTask(task: ITask) {
        removeTask(task)
    }

    return (
        <div>
            <hr/>
            <div className={'p-3'}>
                <div className={'flex'}>
                    <input
                        onClick={() => handleRemoveTask(task)}
                        type="checkbox"
                        className={'mr-2'}/>
                    <p>{task.value}</p>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Task;
