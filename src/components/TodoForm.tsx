import React, {useState} from "react";

interface TodoFormProps {
    addTask(str: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [task, setTask] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const onKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && task !== '') {
            props.addTask(task);
            setTask('');
        }
    }

    return <div className='input-field'>
        <input id='title' type='text' value={task} onChange={onChange} onKeyDown={onKeyDown}/>
        <label htmlFor='title' className='active'>Введите название дела</label>
    </div>
}
