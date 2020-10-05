import React, {useCallback, useContext} from "react";
import styles from './Transform.module.css';
import {Slider} from "../../Slider/Slider";
import cn from 'classnames';
import {TransformContext} from "../../../context/transform/transformContext";

const blendModeArr = ['translate', 'scale', 'rotate', 'skew']
const transformMeasure: any = {
    translate: (x: number, y: number, z?: number) => ` translate(${Math.ceil(x - 50)}px, ${Math.ceil(y - 50)}px)`,
    scale: (x: number, y: number, z?: number) => ` scaleX(${Math.ceil(x * 1.5)/ 100})`+
        `scaleY(${Math.ceil(y * 1.5)/ 100})`,
    rotate: (x: number, y: number, z: number) =>
        ` rotateX(${Math.ceil((x - 50) / 100 * 360)}deg) ` +
        `rotateY(${Math.ceil((y - 50) / 100 * 360)}deg) ` +
        `rotateZ(${Math.ceil((z - 50) / 100 * 360)}deg)`,
    skew: (x: number, y: number, z?: number) =>
        ` skewX(${Math.ceil((x - 50) / 100 * 50)}deg) skewY(${Math.ceil((+y - 50) / 100 * 50)}deg)`,
}

export const Transform: React.FC = () => {
    const {state, setFunction, setX, setY, setZ} = useContext(TransformContext);
    const onClick = useCallback((event) => {
        setFunction(event.target.textContent);
    }, []);

    return <div className={styles.main}>
        <div className={styles.options}>
            <label>transform-function: {state.function};</label>
            <div className={styles.buttons}>
                {
                    blendModeArr.map((i, j) =>
                        <button className={cn(styles.button, 'waves-effect waves-light btn')}
                                onClick={onClick}
                                key={j}>{i}</button>)
                }
            </div>
            <label>X</label>
            <Slider value={state.x} setValue={setX}/>
            <label>Y</label>
            <Slider value={state.y} setValue={setY}/>
            {state.function === 'rotate' &&
            <>
                <label>Z</label>
                <Slider value={state.z} setValue={setZ}/>
            </>
            }
            <label>transform: {transformMeasure[state.function](state.x, state.y, state.z)};</label>
        </div>
        <div className={styles.transformContainer}>
            <div className={styles.transform}
                 style={{
                     '--x': state.x,
                     '--y': state.y,
                     '--z': state.z,
                     transform: 'perspective(500px) ' + transformMeasure[state.function](state.x, state.y, state.z),
                 } as React.CSSProperties}>
                <div/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    </div>
}

