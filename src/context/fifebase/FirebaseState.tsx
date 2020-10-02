import React, {useCallback, useReducer} from "react";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import axios from 'axios';
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState: React.FC = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = useCallback((value: boolean) => dispatch({type: SHOW_LOADER, payload:value }), [])

    const fetchNotes = async () => {
        showLoader(true)
        const res = await axios.get(`${url}/notes.json`)

        if (res.data) {
            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            // @ts-ignore
            dispatch({type: FETCH_NOTES, payload});

        }
    }

    const addNote = async (title: string) => {
        const note = {
            title, date: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${url}/notes.json`, note)
            console.log(res.data);
            const payload = {
                ...note,
                id: res.data.name
            }
            // @ts-ignore
            dispatch({type: ADD_NOTE, payload})

        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeNote = async (id: any) => {
        await axios.delete(`${url}/notes/${id}.json`)
        // @ts-ignore
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}