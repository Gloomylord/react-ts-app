import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'

const handlers: any = {
    [SHOW_LOADER]: (state : any,{payload} : any) => ({...state, loading: payload}),
    [ADD_NOTE]: (state : any, {payload} : any) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state: any, {payload}: any) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE]: (state: any, {payload}: any) => ({
        ...state,
        notes: state.notes.filter((note: any) => note.id !== payload)
    }),
    DEFAULT: (state: any) => state
}

export const firebaseReducer = (state: any, action: any) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}