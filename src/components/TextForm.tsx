import React from "react";

interface TextFormProps {
    setStr(str: string): void,
    startSolve(): void,
    str: string
};

export const TextForm: React.FC<TextFormProps> = (props) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setStr(event.target.value);
    }

    const onKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && props.str !== '') {
            props.startSolve();
            props.setStr('')
        }
    }

    return <div className='input-field'>
        <input id='task' type='text' value={props.str} onChange={onChange} onKeyDown={onKeyDown}/>
        <label htmlFor='task' className='active'>Введите условие Задачи</label>
    </div>

}