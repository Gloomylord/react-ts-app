import React, {useCallback, useReducer} from "react";
import {FilterContext} from "./filterContext";
import {filterReducer} from "./filterReducer";
import {SET_FILTER, SET_FILTER_VALUE} from "../types";

export const FilterState: React.FC = ({children}) => {
    let [state, dispatch] = useReducer<any>(filterReducer, {
        filterValue: 40,
        filter: 'blur'
    });

    const setFilter = useCallback((value: number) => {
        // @ts-ignore
        dispatch({
            type: SET_FILTER,
            filter: value
        })
    }, []);

    const setFilterValue = useCallback((value: string) => {
        // @ts-ignore
        dispatch({
            type: SET_FILTER_VALUE,
            filterValue: value
        })
    }, []);

    return <FilterContext.Provider value={{state, setFilter, setFilterValue}}>
        {children}
    </FilterContext.Provider>
}