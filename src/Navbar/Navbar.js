import React from 'react';

import NavItems from './NavItems/NavItems';
import classes from './Navbar.module.css';

const navbar = () => (
    <nav className={classes.Navbar}>
        <h1>Aram Alhaddad</h1>
        <NavItems />
    </nav>
)

export default navbar;