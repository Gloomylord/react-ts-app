import React from "react";
import {Drop} from "./Drop";

export const Drops: React.FC = () => {
    return <div className='dropContainer'>
        <nav className='gooeyNav light-blue darken-3'/>
        <footer className="page-footer light-blue darken-3"/>
        {
            Array.from({length: 10}).map((_, i) => {
                const style = {'--i': i + 1, '--s': Math.random(), '--m': Math.random()} as React.CSSProperties;
                return <Drop key={i} style={style}/>
            })
        }
    </div>
}