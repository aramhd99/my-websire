import React from 'react';

import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css';

const layout = (props) => (
    <div>
        <Navbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
        <footer>Created by Aram Alhaddad All right Recived </footer>
    </div>
)

export default layout;