import React, {CSSProperties, useContext} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {TodoContext} from "../../context/todo/todoContext";

export const TodoList: React.FC = () => {
    const {state, deleteTask} = useContext(TodoContext);
    const del = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.classList.contains('del')) {
            let task: HTMLAnchorElement | null = event.currentTarget.closest('.appearance');
            if (task) {
                deleteTask(task.dataset.id || '');
            }
        }
    }

    return <TransitionGroup component='ul' className="list-group m2 ">
        {
            state.todoList.map((item: string, index: number) => <CSSTransition in={!!item}
                                                                               timeout={{enter: 800, exit: 400}}
                                                                               key={index}
                                                                               classNames='note'
                                                                               unmountOnExit={true}
                                                                               mountOnEnter={true}>
                <li data-id={item}
                    key={index}
                    style={{'--i': index + 1} as CSSProperties}
                    className="list-group-item appearance">
                <span className="badge del" onClick={del}>
                    <i className="material-icons">clear</i>
                </span>
                    {item}
                </li>
            </CSSTransition>)
        }
    </TransitionGroup>
}
