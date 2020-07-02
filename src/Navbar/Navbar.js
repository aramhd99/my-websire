import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import NavItems from './NavItems/NavItems';
import SideDrawerToggle from './SideDrawer/SideDrawerToggle/SideDrawerToggle';

 const navbar = props => {

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
                    display:'block'
                    }}>
                    Aram Alhaddad</Link>
                <div className={classes.DesktopOnly}>
                    <NavItems />
                </div>
                <SideDrawerToggle clicked={props.clicked} />
            </nav>      
        )
}

export default navbar;