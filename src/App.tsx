import React, {useCallback, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {TextForm} from "./components/TextForm";
import {places} from "./functions/places";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MainState} from "./context/main/MainState";
import {CSS} from "./pages/CSS";
import {NoMatch} from "./pages/NoMatch";
import {FirebaseState} from "./context/fifebase/FirebaseState";
import {Loader} from "./components/Loader/Loader";
const TodoForm = React.lazy(() => import("./components/Todo/TodoForm"));
const TodoList = React.lazy(() => import("./components/Todo/TodoList"));

const App: React.FunctionComponent = () => {
    let [str, setStr] = useState<string>('');
    let [res, setRes] = useState<string>('');

    const startSolve = useCallback(() => {
        setRes(places(str));
    }, [str, res]);

    return <MainState>
        <FirebaseState>
            <Router>
                <Navbar/>
                <div className='container'>
                    <CSS/>
                    <Switch>
                        <Route path='/' exact/>
                        <Route path="/react_ts/" exact/>
                        <Route path="/react_ts/css" exact/>
                        <Route path="/react_ts/css/:props" exact/>
                        <Route path="/react_ts/Components" exact>
                            <React.Suspense fallback={''}>
                                <TodoForm/>
                            </React.Suspense>
                            <React.Suspense fallback={<Loader color={'#222'}/>}>
                                <TodoList/>
                            </React.Suspense>
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

        </FirebaseState>
    </MainState>
}

export default App;
