import {SET_BORDER_STYLE, SET_LOCATION, SET_WIDTH,SET_RADIUS} from "../types";

const handlers: any = {
    [SET_WIDTH]: (state: any, action: any) => ({...state, width: action.width}),
    [SET_BORDER_STYLE]: (state: any,action: any) => ({...state, borderStyle: action.borderStyle}),
    [SET_LOCATION]: (state: any,action: any) => ({...state, location: action.location}),
    [SET_RADIUS]: (state: any,action: any) => ({...state, radius: action.radius}),
    DEFAULT: (state:any) => state,
}

export const mainReducer = (state: any, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}