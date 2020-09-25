import {SET_TODO_LIST} from "../types";

const handlers: any = {
    [SET_TODO_LIST]: (state: any, action: any) => ({...state, todoList: action.todoList}),
    DEFAULT: (state: any) => state,
}

export const todoReducer = (state: any, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}