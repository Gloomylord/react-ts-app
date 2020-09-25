import React from "react";
import {Drop} from "./Drop";
import cn from 'classnames';
import styles from './Drops.module.css';

export const Drops: React.FC = () => {

    return <>
        <div className={styles.dropContainer}>
            <div className={cn('light-blue darken-3', styles.dropNav)}/>
            <div className={cn("light-blue darken-3", styles.bottom)}/>
            {
                Array.from({length: 10}).map((_, i) => {
                    return <Drop key={i} i={i}/>
                })
            }
        </div>
    </>
}