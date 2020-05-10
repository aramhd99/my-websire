import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        ToggleBar : false,
    }

    SideDrawerToggleHandler = () => {
        this.setState(preState => {
            return {ToggleBar: !preState.ToggleBar}
        })
    }


    render () {
        return (
            <div>
                <Navbar clicked={this.SideDrawerToggleHandler}/>
                <SideDrawer Toggle={this.state.ToggleBar} 
                        clicked={this.SideDrawerToggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <footer style={{
                    textAlign:'center',
                    bottom:'0'
                        }}>&copy; Created by Aram Alhaddad All right Recived </footer>
            </div>
        )
    }
}

export default Layout;