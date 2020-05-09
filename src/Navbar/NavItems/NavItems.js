import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem exact to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/contact'>Contact Me</NavItem>
    </ul>
)

export default navItems;