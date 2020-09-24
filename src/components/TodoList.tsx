import React from "react";

interface TodoListProps {
    todoList: Array<string>

    deleteTask(str: string): void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const deleteTask = (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (event.currentTarget.classList.contains('del')) {
                let appearance:HTMLAnchorElement|null = event.currentTarget.closest('.appearance');
                if (appearance) {
                    props.deleteTask(appearance.dataset.id || '');
                }
            }
    }

    return <div className="collection m2 ">
        {
            props.todoList.map((item, index) => <a data-id={item}
                                                   key={index}
                                                   href="#"
                                                   className="collection-item appearance">
                <span className="badge del" onClick={deleteTask}>
                    <i className="material-icons">clear</i>
                </span>
                {item}
            </a>)
        }
    </div>
}
