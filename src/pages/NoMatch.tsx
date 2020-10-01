import React from "react";
import styles from './NoMatch.module.css';

export const NoMatch: React.FC = ()=> {
    return <div className={styles.main}>
        <h1 className={styles.title}>
            Not Found 404
        </h1>
    </div>
}