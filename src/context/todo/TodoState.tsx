import React, {useCallback, useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {SET_TODO_LIST} from "../types";

export const TodoState: React.FC = ({children}) => {
    let [state, dispatch] = useReducer(todoReducer, {
        todoList: [],
    });

    const addTask = useCallback((str: string): void => {
        // @ts-ignore
        dispatch({
            type: SET_TODO_LIST,
            // @ts-ignore
            todoList: [...state.todoList, str],
        });
    }, [state]);

    const deleteTask = useCallback((str: string): void => {
        // @ts-ignore
        dispatch({
            type: SET_TODO_LIST,
            // @ts-ignore
            todoList: state.todoList.filter((i: string) => str !== i)
        })
    }, [state]);

    return <TodoContext.Provider value={{state, addTask, deleteTask}}>
        {children}
    </TodoContext.Provider>
}