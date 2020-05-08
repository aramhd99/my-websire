import React, { Component } from 'react';

import classes from './Navbar.module.css';
import NavItems from './NavItems/NavItems';
import SideDrawerToggle from './SideDrawer/SideDrawerToggle/SideDrawerToggle';

class Navbar extends Component{
    state ={
        toggleClicked: true,
    }

    render () {
        return (
            <nav className={classes.Navbar}>
                <h1 style={{padding:'0 20px'}}>Aram Alhaddad</h1>
                <div className={classes.DesktopOnly}>
                    <NavItems />
                </div>
                <SideDrawerToggle />
            </nav>
        )
    }
}

export default Navbar;