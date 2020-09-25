import React, {useCallback, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {TextForm} from "./components/TextForm";
import {places} from "./functions/places";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainState} from "./context/main/MainState";
import {CSS} from "./pages/CSS";

const App: React.FunctionComponent = () => {
    let [todoList, setTodoList] = useState<Array<string>>([]);
    let [str, setStr] = useState<string>('');
    let [res, setRes] = useState<string>('');

    const addTask = useCallback((str: string): void => {
        setTodoList([...todoList, str]);
    }, [todoList]);

    const deleteTask = useCallback((str: string): void => {
        setTodoList(todoList.filter((item) => str !== item))
    }, [todoList]);

    const startSolve = useCallback(() => {
        setRes(places(str));
    }, [str, res]);

    return <MainState>
        <Router>
            <Navbar/>
            <CSS/>
            <div className='container'>
                <Route path="/" exact>
                    <TodoForm addTask={addTask}/>
                    <TodoList deleteTask={deleteTask} todoList={todoList}/>
                </Route>
                <Route path="/Components" exact>
                    <TodoForm addTask={addTask}/>
                    <TodoList deleteTask={deleteTask} todoList={todoList}/>
                </Route>
                <Route path="/JavaScript" exact component={App}>
                    <TextForm str={str} setStr={setStr} startSolve={startSolve}/>
                    <h2 className='result px1'>Результат: {res}</h2>
                </Route>
                <svg className='filterSvg ' xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="goo"/>
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <footer className='page-footer purple darken-2'/>
        </Router>
    </MainState>
}

export default App;
