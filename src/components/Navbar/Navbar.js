import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>  
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar