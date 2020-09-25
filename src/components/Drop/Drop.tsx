import React, {useMemo} from "react";
import styles from './Drops.module.css';

export const Drop: React.FC<{ i: number }> = ({i}) => {

    const randomNumbers = useMemo(() => {
        return {
            '--s': Math.random(),
            '--m': Math.random()
        }
    }, []);
    return <span className={styles.drop}
                 style={{'--i': i + 1, ...randomNumbers} as React.CSSProperties}/>
}
