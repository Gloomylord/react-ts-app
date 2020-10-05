import React, {CSSProperties, useCallback, useContext, useEffect} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {FirebaseContext} from "../../context/fifebase/firebaseContext";
import {Loader} from "../Loader/Loader";

const TodoList: React.FC = () => {
    const {loading, notes, removeNote, fetchNotes} = useContext(FirebaseContext);
    const del = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.classList.contains('del')) {
            let task: HTMLAnchorElement | null = event.currentTarget.closest('.appearance');
            if (task) {
                removeNote(task.dataset.id || '');
            }
        }
    }, [])

    useEffect(() => {
        fetchNotes();
    }, [])

    return <><TransitionGroup component='ul' className="list-group m2 ">
        {notes.map((item: any, index: number) => <CSSTransition timeout={{enter: 800, exit: 490}}
                                                                key={item.id}
                                                                classNames='note'
                                                                unmountOnExit={true}
                                                                mountOnEnter={true}>
            <li data-id={item.id}
                key={item.id}
                style={{'--i': index + 1} as CSSProperties}
                className="list-group-item appearance">
                <span className="badge del" onClick={del}>
                    <i className="material-icons">clear</i>
                </span>
                {item.title}
            </li>
        </CSSTransition>)
        }
    </TransitionGroup>
        { loading && <Loader color={'#20022d'}/>}
    </>
}

export default TodoList;
