import React, {useCallback, useContext, useState} from "react";
import {Slider} from "../Slider/Slider";
import styles from './Border.module.css';
import cn from "classnames";
import {MainContext} from "../../context/main/mainContext";

export const Border: React.FC = () => {
    const {state, setWidth, setBorderStyle} = useContext(MainContext);
    const onClick = useCallback((event) => {
        setBorderStyle(event.target.textContent);
    }, []);

    return <div className={styles.container}>
        <section className={styles.main}>
            <Slider value={state.width} setValue={setWidth}/>
            <label>border-style: {state.borderStyle};</label>
            <div className={styles.borderMain}
                 style={{'--width': state.width, borderStyle: state.borderStyle} as React.CSSProperties}/>

            <div className={styles.buttons}>
                {
                    ['solid', 'inset', 'dashed', 'dotted', 'double', 'groove', 'ridge',].map((i, j) =>
                        <button className={cn(styles.button, 'waves-effect waves-light btn')}
                                onClick={onClick}
                                key={j}>{i}</button>)
                }
            </div>
        </section>
    </div>
}
