import React, {useContext} from "react";
import {Aside} from "../components/Aside/Aside";
import {Route} from "react-router-dom";
import {Border} from "../components/CSSProperties/Border/Border";
import {MainContext} from "../context/main/mainContext";
import {Drops} from "../components/CSSProperties/Drop/ Drops";
import {Background} from "../components/CSSProperties/Background/Background";
import {BackState} from "../context/background/BackState";
import {Filter} from "../components/CSSProperties/Filter/Filter";
import {FilterState} from "../context/filter/FilterState";
import {TransformState} from "../context/transform/TransformState";
import {Transform} from "../components/CSSProperties/Transform/Transform";

export const CSS: React.FC = () => {
    const {state} = useContext(MainContext);

    return <>
        {<Aside show={state.location.toLowerCase().indexOf('css') > 0}/>}
        <BackState>
            <FilterState>
                <TransformState>
                <Route path='/react_ts/CSS'>
                    <Route path='/react_ts/CSS' exact>
                        <Border/>
                    </Route>
                    <Route path='/react_ts/CSS/border'>
                        <Border/>
                    </Route>
                    <Route path='/react_ts/css/animation' exact>
                        <Drops/>
                    </Route>
                    <Route path='/react_ts/css/background' exact>
                        <Background/>
                    </Route>

                    <Route path='/react_ts/css/filter' exact>
                        <Filter/>
                    </Route>
                    <Route path='/react_ts/css/transform' exact>
                        <Transform/>
                    </Route>
                </Route>
                </TransformState>
            </FilterState>
        </BackState>
    </>
}
