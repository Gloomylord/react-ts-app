import React, {useCallback, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {TodoForm} from "./components/Todo/TodoForm";
import {TodoList} from "./components/Todo/TodoList";
import {TextForm} from "./components/TextForm";
import {places} from "./functions/places";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {MainState} from "./context/main/MainState";
import {CSS} from "./pages/CSS";
import {TodoState} from "./context/todo/TodoState";
import {NoMatch} from "./pages/NoMatch";

const App: React.FunctionComponent = () => {
    let [str, setStr] = useState<string>('');
    let [res, setRes] = useState<string>('');

    const startSolve = useCallback(() => {
        setRes(places(str));
    }, [str, res]);

    return <MainState>
        <TodoState>
            <Router>
                <Navbar/>
                <div className='container'>
                    <CSS/>
                    <Switch>
                        <Route path="/react_ts" exact/>
                        <Route path="/react_ts/css/:props" exact/>
                        <Route path="/react_ts/Components" exact>
                            <TodoForm/>
                            <TodoList/>
                        </Route>
                        <Route path="/react_ts/JavaScript" exact>
                            <TextForm str={str} setStr={setStr} startSolve={startSolve}/>
                            <h2 className='result px1'>Результат: {res}</h2>
                        </Route>
                        <Route path='*'>
                            <NoMatch/>
                        </Route>
                    </Switch>

                    <svg className='filterSvg ' xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                               result="goo"/>
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <footer className='page-footer purple darken-2'/>
            </Router>
        </TodoState>
    </MainState>
}

export default App;
