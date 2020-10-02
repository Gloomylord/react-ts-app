import React from "react";
import styles from './Loader.module.css';

interface ILoader {
    color: string,
    children?: any
}

export const Loader: React.FC<ILoader> = ({color}) => {
    return <div className={styles.main} style={{}}>
        {Array.from({length: 10}).map((_, i) => <div key={i}
                                                    style={{
                                                        '--i': 6 - i ,
                                                        '--color': color
                                                    } as React.CSSProperties}
                                                    className={styles.element}/>)}
    </div>
}
