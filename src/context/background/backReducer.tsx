import {SET_BACKGROUND_BLEND_MOD,SET_BACKGROUND_SIZE } from "../types";

const handlers: any = {
    [SET_BACKGROUND_SIZE]: (state: any, action: any) => ({...state, backgroundSize: action.backgroundSize}),
    [SET_BACKGROUND_BLEND_MOD]: (state: any,action: any) => ({...state, backgroundBlendMode: action.backgroundBlendMode}),
    DEFAULT: (state:any) => state,
}

export const backReducer = (state: any, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}