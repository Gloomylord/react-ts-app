import React, {useCallback, useContext} from "react";
import styles from './Aside.module.css';
import cn from 'classnames';
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import './../../App.css';
import {MainContext} from "../../context/main/mainContext";

interface IProp {
    text: string,
    icon: string,
}

let properties: Array<IProp> = [
    {text: 'border', icon: 'border_all'},
    {text: 'background', icon: 'healing'},
    {text: 'animation', icon: 'animation'},
    {text: 'filter', icon: 'filter'}
    ];

export const Aside: React.FC<{ show: boolean }> = (props) => {
    const {state, setLocation} = useContext(MainContext);
    const onClick: React.EventHandler<any> = useCallback((event) => {
        setLocation('/css/' + event.currentTarget.dataset.id);
    }, [state.location]);

    return <CSSTransition in={props.show}
                          classNames={'aside'}
                          timeout={{enter: 500,exit:200}}
                          mountOnEnter={true}
                          unmountOnExit={true}
    >
        <aside className={cn(styles.main)}>
            <ul className={styles.list}>
                {
                    properties.map((item: IProp) => <li key={item.text}>
                        <Link onClick={onClick} to={'/css/' + item.text} data-id={item.text}
                              className={cn(styles.elem, {
                                  [styles.choose]: state.location === '/css/' + item.text,
                              })}>
                            <i className="large material-icons">{item.icon}</i>
                            {item.text}
                        </Link>
                    </li>)
                }
            </ul>
        </aside>
    </CSSTransition>
}
