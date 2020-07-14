import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => {
    const [ toggleBar, setToggleBar ] = useState(false)

    const SideDrawerToggleHandler = () => {
        setToggleBar(!toggleBar)
    }

        return <div>
                <Navbar clicked={SideDrawerToggleHandler} />
                <SideDrawer Toggle={toggleBar}
                        clicked={SideDrawerToggleHandler} />
                <main className={classes.Content}>
                     {props.children}
                </main>
                <footer style={{
                    textAlign:'center',
                    bottom:'0'
                        }}>&copy; Created by Aram Alhaddad. All rights reserved.</footer>
            </div>
}

export default Layout;