import React from 'react';

import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';

const sideDrawer = (props) => {
        let ToggleClass = null;
        if (props.Toggle) {
            ToggleClass = [classes.SideDrawer, classes.Open]
        } else {
            ToggleClass = [classes.SideDrawer, classes.Close]
        }
        return (
            <div className={ToggleClass.join(' ')}>
                <NavItems />
            </div>
    )
} 

export default sideDrawer;