import React, {useContext} from "react";
import {Aside} from "../components/Aside/Aside";
import {Route} from "react-router-dom";
import {Border} from "../components/CSSProperties/Border";
import {MainContext} from "../context/main/mainContext";

export const CSS: React.FC = () => {
    const {state} = useContext(MainContext);

    return <>
        {<Aside show={state.location.toLowerCase().indexOf('css') > 0}/>}
        <Route path='/CSS'>
            <Route path='/CSS' exact>
                <Border/>
            </Route>
            <Route path='/CSS/border'>
                <Border/>
            </Route>
        </Route>
    </>
}
