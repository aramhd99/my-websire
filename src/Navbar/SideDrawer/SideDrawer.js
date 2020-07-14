import React, {Fragment} from 'react';
import { Link} from "react-router-dom";

import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
        let ToggleClass = null;
        if (props.Toggle) {
            ToggleClass = [classes.SideDrawer, classes.Open]
        } else {
            ToggleClass = [classes.SideDrawer, classes.Close]
        }
        return (
            <Fragment>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div className={ToggleClass.join(' ')} onClick={props.clicked}>
                <nav>
                    <Link to='/'
                          style={{textDecoration: "none",}}>
                    <h1 style={{padding: '0 30px',color:'black'}}>Aram Alhaddad</h1>
                    </Link>
                <NavItems />
                </nav>
            </div>
            </Fragment>
    )
} 

export default sideDrawer;