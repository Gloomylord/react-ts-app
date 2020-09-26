import React, {useCallback, useReducer} from "react";
import {BackContext} from "./backContext";
import {backReducer} from "./backReducer";
import {SET_BACKGROUND_BLEND_MOD, SET_BACKGROUND_SIZE} from "../types";

export const BackState: React.FC = ({children}) => {
    let [state, dispatch] = useReducer<any>(backReducer, {
        backgroundSize: 45,
        backgroundBlendMode: 'color',
    });

    const setBackgroundSize = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: SET_BACKGROUND_SIZE,
            backgroundSize: value
        })
    }, []);

    const setBackgroundBlandMode = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: SET_BACKGROUND_BLEND_MOD,
            backgroundBlendMode: value
        })
    }, []);



    return <BackContext.Provider value={{setBackgroundBlandMode, state, setBackgroundSize }}>
        {children}
    </BackContext.Provider>
}