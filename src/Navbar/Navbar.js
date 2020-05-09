import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link 
                to='/'
                style={{
                    color:'black',
                    textDecoration:'none',
                    fontSize:'32px',
                    fontWeight:'bold',
                    padding:'0 20px',
                    cursor:'pointer',
                    }}>
                    Aram Alhaddad</Link>
                <div className={classes.DesktopOnly}>
                    <NavItems />
                </div>
                <SideDrawerToggle clicked={this.props.clicked} />
            </nav>      
        )
    }
}

export default Navbar;