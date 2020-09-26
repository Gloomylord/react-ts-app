import React, {useCallback, useContext} from "react";
import {Slider} from "../../Slider/Slider";
import styles from './Border.module.css';
import cn from "classnames";
import {MainContext} from "../../../context/main/mainContext";

export const Border: React.FC = () => {
    const {state, setWidth, setBorderStyle, setRadius} = useContext(MainContext);
    const onClick = useCallback((event) => {
        setBorderStyle(event.target.textContent);
    }, []);

    return <section className={styles.main}>
        <label>border-radius: {Math.ceil(state.radius)}px;</label>
        <Slider value={state.radius} setValue={setRadius}/>
        <label>border-width : {Math.ceil(state.width)}px;</label>
        <Slider value={state.width} setValue={setWidth}/>

        <div className={styles.borderMain}
             style={{
                 '--width': state.width,
                 '--radius': state.radius,
                 borderStyle: state.borderStyle
             } as React.CSSProperties}/>
        <label>border-style: {state.borderStyle};</label>
        <div className={styles.buttons}>
            {
                ['solid', 'inset', 'dashed', 'dotted', 'double', 'groove', 'ridge',].map((i, j) =>
                    <button className={cn(styles.button, 'waves-effect waves-light btn')}
                            onClick={onClick}
                            key={j}>{i}</button>)
            }
        </div>
    </section>
}
