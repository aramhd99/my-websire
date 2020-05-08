import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <SideDrawer />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <footer>Created by Aram Alhaddad All right Recived </footer>
            </div>
        )
    }
}

export default Layout;