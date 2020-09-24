import React, {useCallback} from "react";
import styles from './Aside.module.css';
import cn from 'classnames';
import {Link} from "react-router-dom";

interface IProp {
    text: string,
    icon: string,
}

interface AsideProps {
    locationCss: string,
    setLocationCss(str: any): void
}

let properties: Array<IProp> = [{text: 'border', icon: 'border_all'}, {text: 'background', icon: 'healing'}];

export const Aside: React.FC<AsideProps> = (props) => {

    const onClick: React.EventHandler<any> = useCallback((event) => {
        props.setLocationCss(event.currentTarget.dataset.id);
    }, [props.locationCss]);


    return <aside className={styles.main}>
        <ul className={styles.list}>
            {
                properties.map((item: IProp) => <li key={item.text}>
                    <Link onClick={onClick} to={'/css/' + item.text} data-id={item.text} className={cn(styles.elem, {
                        [styles.choose]: props.locationCss === item.text,
                    })}>
                        <i className="large material-icons">{item.icon}</i>
                        {item.text}
                    </Link>
                </li>)
            }
        </ul>
    </aside>
}