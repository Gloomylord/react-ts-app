import React, {useCallback, useState} from "react";

export const Drop: React.FC<{style: React.CSSProperties}> = (props) => {
    let [isNav, setIsNav] = useState<boolean>(true);

    let onClick = useCallback(()=>{
        setIsNav(!isNav);
    },[isNav]);
    return <span
        onClick={onClick}
        className={(isNav) ? 'drop dropNav':'drop dropFooter'}
        style={props.style}/>
}