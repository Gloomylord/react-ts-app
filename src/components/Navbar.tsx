import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Navbar: React.FunctionComponent = (props) => {
    let [location, setLocation] = useState<string>('' + window.location.pathname.match(/\/(\w+)\/?/)![1]);
    const onClick: React.EventHandler<any> = useCallback((event) => {
        setLocation(event.target.textContent);
    }, [])

    return <nav className='navigateTop'>
        <div className="nav-wrapper px1 purple darken-2">
            <a href="#" className="brand-logo">React+TypeScript</a>
            <ul onClick={onClick} id="nav-mobile" className="right hide-on-med-and-down">
                <li className={(location === 'CSS') ? 'choose link' : 'link'}>
                    <Link to="/CSS">CSS</Link>
                </li>
                <li className={(location === 'Components' || location === '') ? 'choose link' : 'link'}>
                    <Link to="/Components">Components</Link>
                </li>
                <li className={(location === 'JavaScript') ? 'choose link' : 'link'}>
                    <Link to="/JavaScript">JavaScript</Link>
                </li>
            </ul>
        </div>
    </nav>
}
export default Navbar;
