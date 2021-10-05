import React, { useState } from 'react';


function NavLink(props) {

    const [active, setActive] = useState(false);

    return (
        <li className="nav-item">
          <a onClick={() => setActive(active)} className={`nav-link ${active ? 'active' : ''}`} aria-current="page" href={props.link}>{props.name}</a>
        </li>
    );
}

export default NavLink;
