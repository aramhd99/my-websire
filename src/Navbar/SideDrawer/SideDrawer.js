import React from 'react';

import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';

const sideDrawer = () => (
    <div className={classes.SideDrawer}>
        <NavItems />
    </div>
)

export default sideDrawer;