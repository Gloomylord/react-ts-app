import React, {useCallback, useReducer} from "react";
import {MainContext} from "./mainContext";
import {mainReducer} from "./mainReducer";

interface IState {
    width: number
}

export const MainState: React.FC = ({children}) => {
    let [state, dispatch] = useReducer<any>(mainReducer, {
        width: 40,
        location: window.location.pathname,
        radius: 0,
        borderStyle: 'solid'
    });

    const setWidth = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: "SET_WIDTH",
            width: value
        })
    }, []);

    const setBorderStyle = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: "SET_BORDER_STYLE",
            borderStyle: value
        })
    }, []);

    const setLocation = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: "SET_LOCATION",
            location: value
        })
    }, []);

    const setRadius = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: "SET_RADIUS",
            radius: value
        })
    }, []);

    return <MainContext.Provider value={{setWidth, state, setBorderStyle, setLocation, setRadius}}>
        {children}
    </MainContext.Provider>
}