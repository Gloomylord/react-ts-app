import {SET_TRANSFORM_FUNCTION, SET_TRANSFORM_X, SET_TRANSFORM_Y, SET_TRANSFORM_Z} from "../types";

const handlers: any = {
    [SET_TRANSFORM_FUNCTION]: (state: any, action: any) => ({...state, function: action.function}),
    [SET_TRANSFORM_X]: (state: any, action: any) => ({...state, x: action.x}),
    [SET_TRANSFORM_Y]: (state: any, action: any) => ({...state, y: action.y}),
    [SET_TRANSFORM_Z]: (state: any, action: any) => ({...state, z: action.z}),
    DEFAULT: (state: any) => state,
}

export const transformReducer = (state: any, action: any) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
