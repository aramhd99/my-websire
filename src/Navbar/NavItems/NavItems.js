import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact Me</NavItem>
    </ul>
)

export default navItems;