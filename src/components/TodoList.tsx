import React, {CSSProperties} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface TodoListProps {
    todoList: Array<string>

    deleteTask(str: string): void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const deleteTask = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.classList.contains('del')) {
            let appearance: HTMLAnchorElement | null = event.currentTarget.closest('.appearance');
            if (appearance) {
                props.deleteTask(appearance.dataset.id || '');
            }
        }
    }

    return <TransitionGroup component='ul' className="list-group m2 ">
        {
            props.todoList.map((item, index) => <CSSTransition in={!!item}
                                                               timeout={{enter: 800,exit: 400}}
                                                               key={index}
                                                               classNames='note'
                                                               unmountOnExit={true}
                                                               mountOnEnter={true}>
                <li data-id={item}
                   key={index}
                    style={{'--i': index + 1} as CSSProperties}
                   className="list-group-item appearance">
                <span className="badge del" onClick={deleteTask}>
                    <i className="material-icons">clear</i>
                </span>
                    {item}
                </li>
            </CSSTransition>)
        }
    </TransitionGroup>
}
