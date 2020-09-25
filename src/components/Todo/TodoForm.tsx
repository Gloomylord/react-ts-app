import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/todo/todoContext";

export const TodoForm: React.FC = () => {
    const [task, setTask] = useState<string>('');
    const {addTask} = useContext(TodoContext);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const onKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && task !== '') {
            addTask(task);
            setTask('');
        }
    }

    return <div className='input-field'>
        <input id='title' type='text' value={task} onChange={onChange} onKeyDown={onKeyDown}/>
        <label htmlFor='title' className='active'>Введите название дела</label>
    </div>
}
