import React, {useContext} from "react";
import {Aside} from "../components/Aside/Aside";
import {Route} from "react-router-dom";
import {Border} from "../components/CSSProperties/Border/Border";
import {MainContext} from "../context/main/mainContext";
import {Drops} from "../components/CSSProperties/Drop/ Drops";
import {Background} from "../components/CSSProperties/Background/Background";
import {BackContext} from "../context/background/backContext";
import {BackState} from "../context/background/BackState";

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
            <Route path='/css/animation' exact>
                <Drops/>
            </Route>
            <BackState>
                <Route path='/css/background' exact>
                    <Background/>
                </Route>
            </BackState>
        </Route>
    </>
}
