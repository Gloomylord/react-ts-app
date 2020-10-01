import React, {useCallback, useReducer} from "react";
import {TransformContext} from "./transformContext";
import {transformReducer} from "./transformReducer";
import {
    SET_TRANSFORM_FUNCTION,
    SET_TRANSFORM_X,
    SET_TRANSFORM_Y,
    SET_TRANSFORM_Z,
} from "../types";

export const TransformState: React.FC = ({children}) => {
    let [state, dispatch] = useReducer<any>(transformReducer, {
        'function': 'translate',
        x: 50,
        y: 50,
        z: 50,
    });

    const setFunction = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: SET_TRANSFORM_FUNCTION,
            function: value
        })
    }, []);

    const setY = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: SET_TRANSFORM_Y,
            y: value
        })
    }, []);

    const setX = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: SET_TRANSFORM_X,
            x: value
        })
    }, []);

    const setZ = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: SET_TRANSFORM_Z,
            z: value
        })
    }, []);

    return <TransformContext.Provider value={{setFunction, state, setX, setY, setZ}}>
        {children}
    </TransformContext.Provider>
}