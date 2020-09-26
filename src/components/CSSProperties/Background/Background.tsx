import React, {useCallback, useContext} from "react";
import styles from './Background.module.css';
import {Slider} from "../../Slider/Slider";
import cn from "classnames";
import {BackContext} from "../../../context/background/backContext";

const blendModeArr = ['normal', 'color', 'color-burn', 'color-dodge', 'darken', 'difference', 'exclusion',
    'hard-light', 'hue', 'lighten', 'multiply','soft-light','screen','luminosity','saturation','overlay']

export const Background: React.FC = () => {
    const {state, setBackgroundSize, setBackgroundBlandMode} = useContext(BackContext);
    const onClick = useCallback((event) => {
        setBackgroundBlandMode(event.target.textContent);
    }, []);

    return <div className={styles.main}>

        <label>background-size: {Math.ceil(state.backgroundSize * 2 + 10)}%;</label>
        <Slider value={state.backgroundSize} setValue={setBackgroundSize}/>

        <div className={styles.back}
             style={{
                 '--size': state.backgroundSize,
                 backgroundBlendMode: state.backgroundBlendMode,
             } as React.CSSProperties}/>
        <label>background-blend-mode: {state.backgroundBlendMode};</label>
        <div className={styles.buttons}>
            {
                blendModeArr.map((i, j) =>
                    <button className={cn(styles.button, 'waves-effect waves-light btn')}
                            onClick={onClick}
                            key={j}>{i}</button>)
            }
        </div>

    </div>
}
