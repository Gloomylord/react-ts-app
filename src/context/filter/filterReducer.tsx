import {SET_FILTER,SET_FILTER_VALUE} from "../types";

const handlers: any = {
    [SET_FILTER]: (state: any, action: any) => ({...state, filter: action.filter}),
    [SET_FILTER_VALUE]: (state: any, action: any) => ({...state, filterValue: action.filterValue}),
    DEFAULT: (state:any) => state,
}

export const filterReducer = (state: any, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}