import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const navItem = (props) => (
        <NavLink className={classes.NavItem}
        {...props}
        activeClassName={classes.active}>
            {props.children}
        </NavLink>
)

export default navItem;