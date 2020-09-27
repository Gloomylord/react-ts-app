import React, {useCallback, useContext} from "react";
import styles from './Filter.module.css';
import {FilterContext} from "../../../context/filter/filterContext";
import {Slider} from "../../Slider/Slider";
import cn from "classnames";

const filtersArr = ['unset', 'blur', 'hue-rotate', 'brightness', 'contrast', 'drop-shadow', 'grayscale', 'invert',
    'opacity', 'saturate', 'sepia'];

const filtersMeasure: any = {
    unset: (value: number) => 'unset',
    blur: (value: number) => 'blur(' + Math.ceil(value) / 10 + 'px)',
    brightness: (value: number) => 'brightness(' + Math.ceil(value) / 100 + ')',
    contrast: (value: number) => 'contrast(' + Math.ceil(value) * 2 + '%)',
    'drop-shadow': (value: number) => 'drop-shadow(5px 5px ' + Math.ceil(value / 2) + 'px blue)',
    grayscale: (value: number) => 'grayscale(' + Math.ceil(value)  + '%)',
    'hue-rotate': (value: number) => 'hue-rotate(' + Math.ceil(value * 3.6) + 'deg)',
    invert: (value: number) => 'invert(' + Math.ceil(value) + '%)',
    opacity: (value: number) => 'opacity(' + Math.ceil(value) + '%)',
    saturate: (value: number) => 'saturate(' + Math.ceil(value) + '%)',
    sepia: (value: number) => 'sepia(' + Math.ceil(value ) + '%)'
}

export const Filter: React.FC = () => {
    const {state, setFilterValue, setFilter} = useContext(FilterContext);
    const onClick = useCallback((event) => {
        setFilter(event.target.textContent);
    }, []);

    return <div className={styles.main}>
        <div className={styles.sliderContainer}>
            <label>filter: {filtersMeasure[state.filter](state.filterValue)};</label>
            <Slider value={state.filterValue} setValue={setFilterValue}/>
        </div>
        <div className={styles.buttons}>
            {
                filtersArr.map((i, j) =>
                    <button className={cn(styles.button, 'waves-effect waves-light btn')}
                            onClick={onClick}
                            key={j}>{i}</button>)
            }
        </div>
        <div className={styles.filter}
             style={{filter: filtersMeasure[state.filter](state.filterValue),} as React.CSSProperties}/>

    </div>
}