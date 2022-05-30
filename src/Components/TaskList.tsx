import React, {FC} from 'react';
import Task from "./Task";
import {ITask} from "../types/types";

export interface ITaskListProps {
    tasks: ITask[],
    removeTask: (task: ITask) => void,
}

const TaskList: FC <ITaskListProps> = ({tasks, removeTask } ) => {
    return (
        <div className={'mb-4'}>
            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
};

export default TaskList;
