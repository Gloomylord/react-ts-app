import React, {useCallback, useContext} from "react";
import {Link} from "react-router-dom";
import {MainContext} from "../context/main/mainContext";

const Navbar: React.FunctionComponent = (props) => {
    let {state, setLocation} = useContext(MainContext);

    const onClick: React.EventHandler<any> = useCallback((event) => {
        setLocation('/' + event.target.textContent);
    }, [])
    const str = state.location.toLowerCase();

    return <nav className='navigateTop'>
        <div className="nav-wrapper px1 purple darken-2">
            <a href="#" className="brand-logo">React+TypeScript</a>
            <ul onClick={onClick} id="nav-mobile" className="right hide-on-med-and-down">
                <li className={(str.indexOf('css') > 0) ? 'choose link' : 'link'}>
                    <Link to="/react_ts/CSS">CSS</Link>
                </li>
                <li className={(str.indexOf('components') > 0 || str === '' || str === '/react_rs/') ? 'choose link' : 'link'}>
                    <Link to="/react_ts/Components">Components</Link>
                </li>
                <li className={(str.indexOf('javascript') > 0) ? 'choose link' : 'link'}>
                    <Link to="/react_ts/JavaScript">JavaScript</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;
