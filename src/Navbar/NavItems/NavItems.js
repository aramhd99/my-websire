import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem exact to='/'><FontAwesomeIcon icon="home" /> Home</NavItem>
        <NavItem to='/about'><FontAwesomeIcon icon='info' /> About</NavItem>
        <NavItem to='/contact'><FontAwesomeIcon icon='envelope' /> Contact Me</NavItem>
    </ul>
)

export default navItems;